// components/dashboard/DashboardContent.tsx
import React from 'react';
import Card from '@/components/ui/Card';
import AppointmentsList from '@/components/dashboard/AppointmentsList';
import { appointments } from '@/data/Appointments';

const DashboardContent: React.FC = () => {
  return (
    <div className="p-6 mt-16 space-y-6">
      <Card className="col-span-3">
        <h2 className="font-semibold text-xl mb-4">Upcoming Appointments</h2>
        <AppointmentsList appointments={appointments} />
      </Card>
      {/* You can add more sections for analytics, other cards, etc. */}
    </div>
  );
};

export default DashboardContent;
