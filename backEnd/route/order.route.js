import express from 'express';
import { getOrder, placeOrder } from '../controller/order.controller.js';
const router = express.Router();

router.get('/getorder', getOrder);
router.post('/placeorder', placeOrder);

export default router;