import { Router } from 'express';
import {
    setTemporaryClosure,
    clearTemporaryClosure,
		openShop,
		getShopDetails,
		updateShop,
		getShopProducts,
		getShopOrders,
} from '../controllers/shop.controller';
import authentication from '@/middlewares/authentication';


import multer from 'multer';
import uploadCloud from '@/middlewares/uploadCloud';
import isSeller from '@/middlewares/isSeller';

const upload = multer();

const router = Router();

router.post('/temporary-closure', isSeller, setTemporaryClosure);

router.delete('/temporary-closure', isSeller, clearTemporaryClosure);

router.post('/open-shop', authentication, upload.single('background'), uploadCloud, openShop);
router.get("/detail", isSeller, getShopDetails);
router.patch("/update", isSeller, upload.single('background'), uploadCloud, updateShop);
router.get('/product', isSeller, getShopProducts);
router.get('/orders', isSeller, getShopOrders);


export default router;
