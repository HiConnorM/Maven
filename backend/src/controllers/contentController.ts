import { Request, Response } from 'express';
import ContentSchedule from '../models/ContentSchedule';

interface AuthRequest extends Request {
  user?: any;
}

export const createContentSchedule = async (req: AuthRequest, res: Response) => {
  const { content, platform, scheduledDate } = req.body;

  try {
    const contentSchedule = await ContentSchedule.create({
      userId: req.user.id,
      content,
      platform,
      scheduledDate,
    });

    res.status(201).json(contentSchedule);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

export const approveContentSchedule = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;

  try {
    const contentSchedule = await ContentSchedule.findByPk(id);

    if (!contentSchedule) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    if (contentSchedule.userId !== req.user.id) {
      return res.status(403).json({ msg: 'Unauthorized to approve this content' });
    }

    contentSchedule.approvalStatus = 'Approved';
    await contentSchedule.save();

    res.json(contentSchedule);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
