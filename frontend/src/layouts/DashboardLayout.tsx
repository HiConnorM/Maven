// DashboardLayout.tsx or MainLayout.tsx
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import {Sidebar} from '../components/sidebar/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle sidebar visibility
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} className="w-64" />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        <Navbar onMenuClick={handleSidebarToggle} title="Dashboard" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
