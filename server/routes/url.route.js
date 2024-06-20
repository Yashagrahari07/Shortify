import express from 'express';
import { shortenUrl, getUrl, deleteUrl, getUserUrls, getUrlDetails } from '../controllers/url.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/shorten', verifyToken, shortenUrl);
router.get('/:shortId', getUrl);
router.delete('/:shortId', verifyToken, deleteUrl);
router.get('/user/urls', verifyToken, getUserUrls);
router.get('/details/:shortId', verifyToken, getUrlDetails);

export default router;
