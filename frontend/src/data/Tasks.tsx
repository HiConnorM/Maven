import { Task } from '@/types/dashboard';

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Review client feedback',
    status: 'pending',
    dueDate: '2024-03-21',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Prepare weekly report',
    status: 'in-progress',
    dueDate: '2024-03-20',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Client follow-up calls',
    status: 'completed',
    dueDate: '2024-03-19',
    priority: 'high'
  },
  {
    id: 4,
    title: 'Update marketing materials',
    status: 'pending',
    dueDate: '2024-03-22',
    priority: 'low'
  }
];
