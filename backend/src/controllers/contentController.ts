import { Request, Response } from 'express';
import ContentSchedule from '../models/ContentSchedule';

interface AuthRequest extends Request {
  user?: { id: number };
}

export const createContentSchedule = async (req: AuthRequest, res: Response): Promise<void> => {
    const { content, platform, scheduledDate } = req.body;
  
    try {
      // Assert that req.user is defined
      const contentSchedule = await ContentSchedule.create({
        userId: req.user!.id, // Assert that `user` is always defined here
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

export const approveContentSchedule = async (req: AuthRequest, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const contentSchedule = await ContentSchedule.findByPk(id);

    if (!contentSchedule) {
      res.status(404).json({ msg: 'Content schedule not found' });
      return;
    }

    if (contentSchedule.userId !== req.user?.id) {
      res.status(403).json({ msg: 'Unauthorized to approve this content schedule' });
      return;
    }

    contentSchedule.approvalStatus = 'Approved';
    await contentSchedule.save();

    res.json(contentSchedule);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
