import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Users, Clock, DollarSign, BarChart2, ArrowUpRight } from 'lucide-react';
import { Progress } from "@/components/ui/Progress";
import { dashboardMetrics } from '@/data/Metrics';

const iconMap = {
  'total-clients': Users,
  'session-hours': Clock,
  'revenue': DollarSign,
  'engagement': BarChart2,
};

const MetricsCards: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {dashboardMetrics.map((metric) => {
        const Icon = iconMap[metric.id as keyof typeof iconMap];
        return (
          <Card key={metric.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {metric.id === 'revenue' ? `$${metric.value}` : metric.value}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className={`${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'} inline-flex items-center`}>
                  <ArrowUpRight className={`w-3 h-3 mr-1 ${metric.trend === 'down' ? 'rotate-90' : ''}`} />
                  {metric.change}%
                </span>{" "}
                vs last month
              </p>
              <Progress value={metric.progress} className="mt-2" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default MetricsCards;
