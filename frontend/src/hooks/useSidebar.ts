import { useState, useCallback } from 'react';

// Custom hook to manage the sidebar state
export function useSidebar() {
  // State to handle if the sidebar is open
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Function to toggle the sidebar state
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);

  // Function to open the sidebar
  const openSidebar = useCallback(() => {
    setIsSidebarOpen(true);
  }, []);

  // Function to close the sidebar
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Return the current state and functions to interact with it
  return {
    isSidebarOpen,
    toggleSidebar,
    openSidebar,
    closeSidebar,
  };
}

// No default export here, only named export
