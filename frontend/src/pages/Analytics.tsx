import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/Card';
import { Progress } from '@/components/ui/Progress';

const Analytics: React.FC = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your analytics cards and charts here */}
        </div>
      </div>
    </MainLayout>
  );
};

export default Analytics;
