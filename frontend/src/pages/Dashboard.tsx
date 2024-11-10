import React from 'react';

interface DashboardProps {
  user: {
    id: string;
    name: string;
  };
  metrics: {
    totalViews: number;
    totalSales: number;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ user, metrics }) => {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Total Views: {metrics.totalViews}</p>
      <p>Total Sales: {metrics.totalSales}</p>
    </div>
  );
};

export default Dashboard;
