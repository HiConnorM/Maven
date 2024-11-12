// src/pages/dashboard.tsx
import React from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import DashboardContent from '@/components/dashboard/DashboardContent';
import Analytics from '@/components/dashboard/Analytics';
import AppointmentsList from '@/components/dashboard/AppointmentsList';
import TasksSection from '@/components/dashboard/TasksSection';
import QuickActions from '@/components/dashboard/QuickActions';
import RecentMessages from '@/components/dashboard/RecentMessages';
import { appointments } from '@/data/Appointments';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <DashboardContent />
        <div className="grid gap-8 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <Analytics />
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <AppointmentsList appointments={appointments} />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <TasksSection />
          <QuickActions />
          <RecentMessages />
        </div>
      </div>
    </DashboardLayout>
  );
}
