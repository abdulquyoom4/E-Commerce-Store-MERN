import express from 'express';
import {Contact, getMessages} from '../controller/contact.controller.js'
const router = express.Router();

router.post('/', Contact);
router.get('/admin/messages', getMessages);

export default router;
