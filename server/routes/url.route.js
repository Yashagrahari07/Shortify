import express from 'express';
import { shortenUrl, getUrl, deleteUrl, getAnalytics, getUserUrls } from '../controllers/url.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/shorten', verifyToken, shortenUrl);
router.get('/:shortId', getUrl);
router.delete('/:shortId', verifyToken, deleteUrl);
router.get('/analytics/:shortId', verifyToken, getAnalytics);
router.get('/user/urls', verifyToken, getUserUrls);

export default router;
