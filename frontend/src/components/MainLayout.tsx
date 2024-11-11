// MainLayout.tsx
import React from 'react';
import { Navbar } from '@/components/navbar/Navbar';
import { Sidebar } from '@/components/sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  console.log("MainLayout rendered");

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={true} className="w-64" />
      <div className="flex-1 overflow-auto">
        <Navbar title="Dashboard" onMenuClick={() => {}} />
        <main className="p-6 mt-16">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
