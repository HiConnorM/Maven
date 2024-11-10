const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ContentSchedule = require('../models/ContentSchedule');

// Create scheduled content
router.post('/create', auth, async (req, res) => {
    const { content, platform, scheduledDate } = req.body;

    try {
        const newSchedule = await ContentSchedule.create({
            userId: req.user.id,
            content,
            platform,
            scheduledDate,
            approvalStatus: 'Pending',
        });
        res.json(newSchedule);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Approve scheduled content
router.put('/approve/:id', auth, async (req, res) => {
    try {
        const schedule = await ContentSchedule.findByPk(req.params.id);
        if (!schedule) {
            return res.status(404).json({ msg: 'Content not found' });
        }

        if (schedule.userId !== req.user.id) {
            return res.status(401).json({ msg: 'Not authorized' });
        }

        schedule.approvalStatus = 'Approved';
        await schedule.save();
        res.json(schedule);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Get all scheduled content for a user
router.get('/', auth, async (req, res) => {
    try {
        const schedules = await ContentSchedule.findAll({ where: { userId: req.user.id } });
        res.json(schedules);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;