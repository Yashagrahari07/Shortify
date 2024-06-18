import Url from '../models/url.model.js';
import { generateShortCode } from '../utils/generateShortCode.js';
import QRCode from 'qrcode';
import { errorHandler } from '../utils/error.js';

export const shortenUrl = async (req, res, next) => {
  try {
    const { originalUrl } = req.body;
    const userId = req.user.id;
    const shortCode = generateShortCode();
    const expiresAt = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000);

    const newUrl = new Url({
      originalUrl,
      shortId: shortCode,
      visitHistory: [],
      expiresAt,
      user: userId,
    });

    await newUrl.save();

    const qrCodeUrl = await QRCode.toDataURL(`http://localhost:3000/api/url/${shortCode}`);

    res.status(201).json({ shortCode, qrCodeUrl });
  } catch (err) {
    next(err);
  }
};

export const getUrl = async (req, res, next) => {
  try {
    const { shortId } = req.params;

    const url = await Url.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!url || url.expiresAt < Date.now()) {
      return next(errorHandler(404, 'URL not found or expired'));
    }

    res.status(200).json({ originalUrl: url.originalUrl });
  } catch (err) {
    next(err);
  }
};

export const deleteUrl = async (req, res, next) => {
  try {
    const { shortId } = req.params;
    const userId = req.user.id;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return next(errorHandler(404, 'URL not found'));
    }

    if (url.user.toString() !== userId) {
      return next(errorHandler(403, 'Forbidden'));
    }

    await Url.deleteOne({ shortId });

    res.status(200).json({
      message: 'URL deleted successfully',
      deletedUrl: url.originalUrl
    });
  } catch (err) {
    next(err);
  }
};


export const getAnalytics = async (req, res, next) => {
  try {
    const { shortId } = req.params;
    const userId = req.user.id;

    const url = await Url.findOne({ shortId });

    if (!url) {
      return next(errorHandler(404, 'URL not found'));
    }

    if (url.user.toString() !== userId) {
      return next(errorHandler(403, 'Forbidden'));
    }

    res.json({
      totalClicks: url.visitHistory.length,
      analytics: url.visitHistory,
    });
  } catch (err) {
    next(err);
  }
};

export const getUserUrls = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const urls = await Url.find({ user: userId });

    res.status(200).json(urls);
  } catch (err) {
    next(err);
  }
};
