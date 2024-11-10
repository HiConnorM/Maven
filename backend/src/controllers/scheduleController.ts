import { Request, Response } from 'express';
import Appointment from '../models/Appointment';

interface AuthRequest extends Request {
  user?: any;
}

export const createAppointment = async (req: AuthRequest, res: Response) => {
  const { appointmentDate, notes } = req.body;

  try {
    const appointment = await Appointment.create({
      userId: req.user.id,
      appointmentDate,
      notes,
    });

    res.status(201).json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const updateAppointment = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { appointmentDate, notes } = req.body;

  try {
    const appointment = await Appointment.findByPk(id);

    if (!appointment) {
      return res.status(404).json({ msg: 'Appointment not found' });
    }

    if (appointment.userId !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized to update this appointment' });
    }

    appointment.appointmentDate = appointmentDate;
    appointment.notes = notes;
    await appointment.save();

    res.json(appointment);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
