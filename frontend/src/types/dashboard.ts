export interface DashboardMetric {
  id: string;
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  progress: number;
}

export interface AnalyticsData {
  month: string;
  clients: number;
  revenue: number;
  engagement: number;
}

export interface QuickAction {
  id: string;
  title: string;
  icon: string;
  action: () => void;
}
