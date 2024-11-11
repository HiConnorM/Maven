import React from 'react';
import Sidebar from './ui/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">{children}</div>
    </div>
  );
};

export default MainLayout;