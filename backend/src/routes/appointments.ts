import express, { Request, Response, NextFunction } from 'express';
import auth, { AuthRequest } from '../middlewares/auth';
import Appointment from '../models/Appointment';

const router = express.Router();

router.put('/update/:id', auth, async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    if (!req.user) {
      res.status(401).json({ msg: 'Authorization denied' });
      return;
    }

    const { date, time, type } = req.body;
    const { id } = req.params;

    // Convert the id from the params (which is a string) to a number for comparison
    const appointmentId = parseInt(id, 10);
    if (isNaN(appointmentId)) {
      res.status(400).json({ msg: 'Invalid appointment ID' });
      return;
    }

    const appointment = await Appointment.findByPk(appointmentId);

    if (!appointment) {
      res.status(404).json({ msg: 'Appointment not found' });
      return;
    }

    // Convert req.user.id to number to match appointment.userId type
    const userId = parseInt(req.user.id, 10);
    if (isNaN(userId)) {
      res.status(400).json({ msg: 'Invalid user ID' });
      return;
    }

    // Now both appointment.userId and userId are numbers
    if (appointment.userId !== userId) {
      res.status(403).json({ msg: 'Unauthorized to update this appointment' });
      return;
    }

    await appointment.update({ date, time, type });
    res.json(appointment);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

export default router;
