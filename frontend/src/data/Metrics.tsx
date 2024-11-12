import { DashboardMetric } from '@/types/dashboard';

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: 'total-clients',
    title: 'Total Clients',
    value: 128,
    change: 4,
    trend: 'up',
    progress: 75
  },
  {
    id: 'session-hours',
    title: 'Session Hours',
    value: 32.5,
    change: -2,
    trend: 'down',
    progress: 50
  },
  {
    id: 'revenue',
    title: 'Revenue',
    value: 4320,
    change: 8,
    trend: 'up',
    progress: 80
  },
  {
    id: 'engagement',
    title: 'Engagement Rate',
    value: 89,
    change: 2.5,
    trend: 'up',
    progress: 89
  }
];
