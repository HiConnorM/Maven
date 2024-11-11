import React, { useState } from 'react';
import Navbar from "src/components/ui/Navbar";
import Sidebar, { SidebarProvider } from "@/components/ui/sidebar";
import AppointmentsList from "@/components/dashboard/AppointmentsList";
import { appointments } from "@/data/Appointments";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} />

        <div className="flex-1 overflow-auto">
          {/* Navbar */}
          <Navbar onSidebarToggle={handleSidebarToggle} />

          {/* Main content */}
          <main className="p-6 mt-16 space-y-6"> {/* Add margin-top to account for fixed Navbar */}
            <h1 className="text-3xl font-semibold">Welcome, {user.name}!</h1>

            {/* Metrics Section */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Views</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl">{metrics.totalViews}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl">{metrics.totalSales}</p>
                </CardContent>
              </Card>
            </div>

            {/* Upcoming Appointments Section */}
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent>
                <AppointmentsList appointments={appointments} />
              </CardContent>
            </Card>

            {/* Add other main content sections if needed */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
