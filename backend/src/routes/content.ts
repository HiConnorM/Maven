import express from 'express';
import { createContentSchedule, approveContentSchedule } from '../controllers/contentController';
import auth from '../middlewares/auth';

const router = express.Router();

router.post('/create', auth, createContentSchedule);
router.put('/approve/:id', auth, approveContentSchedule);

export default router;
