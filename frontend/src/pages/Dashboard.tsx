// pages/dashboard.tsx
import React from 'react';
import AppointmentsList from '@/components/dashboard/AppointmentsList';
import Card from '@/components/ui/Card';
import { appointments } from '@/data/Appointments';

const Dashboard: React.FC = () => {
  return (
    <main className="p-6 mt-16 space-y-6">
      <Card className="col-span-3">
        <h2 className="font-semibold text-xl mb-4">Upcoming Appointments</h2>
        <AppointmentsList appointments={appointments} />
      </Card>

      {/* Add other main content sections here */}
    </main>
  );
};

export default Dashboard;
