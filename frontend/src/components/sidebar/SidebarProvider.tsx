// src/components/sidebar/SidebarProvider.tsx
import React, { useState, useCallback, ReactNode, useEffect } from 'react';

type SidebarContextType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  isOpen: true,
  toggleSidebar: () => {}
});

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Return null or a loading state while not mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggleSidebar
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook
export const useSidebar = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};