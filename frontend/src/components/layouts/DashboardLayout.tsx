import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { useSidebar } from '@/components/sidebar/SidebarProvider';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} className="w-64" />
      <div className="flex-1 overflow-auto">
        <Navbar onMenuClick={toggleSidebar} title="Dashboard" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
