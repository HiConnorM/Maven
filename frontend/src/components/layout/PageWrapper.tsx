import React, { useState } from 'react';
import Navbar from '@/components/navbar/Navbar';
import {Sidebar} from '@/components/sidebar/Sidebar';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to handle if the sidebar is open
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Pass the `isOpen` prop to Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1 overflow-auto">
        {/* Navbar with title and button to toggle sidebar */}
        <Navbar title="Dashboard" onMenuClick={toggleSidebar} />

        <main className="p-6 mt-16 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
