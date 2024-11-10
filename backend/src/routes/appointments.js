const express = require('express');
   const router = express.Router();
   const auth = require('../middleware/auth');
   const Appointment = require('../models/Appointment');

   // Get all appointments for a user
   router.get('/', auth, async (req, res) => {
       try {
           const appointments = await Appointment.findAll({ where: { userId: req.user.id } });
           res.json(appointments);
       } catch (err) {
           res.status(500).json({ msg: 'Server error' });
       }
   });

   // Create a new appointment
   router.post('/create', auth, async (req, res) => {
       const { date, time, type } = req.body;

       try {
           const newAppointment = await Appointment.create({
               userId: req.user.id,
               date,
               time,
               type
           });
           res.json(newAppointment);
       } catch (err) {
           res.status(500).json({ msg: 'Server error' });
       }
   });

    // Update an existing appointment
    router.put('/update/:id', auth, async (req, res) => {
        const { date, time, type } = req.body;
 
        try {
            let appointment = await Appointment.findByPk(req.params.id);
            if (!appointment) {
                return res.status(404).json({ msg: 'Appointment not found' });
            }
 
            // Ensure user owns the appointment
            if (appointment.userId !== req.user.id) {
                return res.status(401).json({ msg: 'Not authorized' });
            }
 
            appointment.date = date;
            appointment.time = time;
            appointment.type = type;
 
            await appointment.save();
            res.json(appointment);
        } catch (err) {
            res.status(500).json({ msg: 'Server error' });
        }
    });
 
    module.exports = router;