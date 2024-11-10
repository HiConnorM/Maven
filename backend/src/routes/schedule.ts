import express, { Request, Response, NextFunction } from 'express';
import auth, { AuthRequest } from '../middlewares/auth';
import ContentSchedule from '../models/ContentSchedule';

const router = express.Router();

// Approve content by ID
router.put('/approve/:id', auth, async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    if (!req.user) {
      res.status(401).json({ msg: 'Authorization denied' });
      return;
    }

    // Find the content by ID
    const content = await ContentSchedule.findByPk(id);

    if (!content) {
      res.status(404).json({ msg: 'Content not found' });
      return;
    }

    // Check if the logged-in user has permission to approve this content
    if (content.userId !== parseInt(req.user.id, 10)) {
      res.status(403).json({ msg: 'Unauthorized to approve this content' });
      return;
    }

    // Update the content's approval status
    await content.update({ approvalStatus: 'Approved' });
    res.json(content);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

export default router;
