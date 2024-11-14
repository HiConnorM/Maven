import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { useSidebar } from '@/components/sidebar/SidebarProvider';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} className="w-64 bg-white border-r" />
      <div className="flex-1 overflow-auto">
        <Navbar onMenuClick={toggleSidebar} title="Home" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;