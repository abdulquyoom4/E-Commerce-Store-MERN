import express from 'express';
import { getItem, addItem, editItem, deleteItem } from '../controller/item.controller.js';
const router = express.Router();

router.get('/', getItem);
router.post('/admin/menu', addItem);
router.put('/admin/menu', editItem);
router.delete('/admin/menu', deleteItem);
export default router;