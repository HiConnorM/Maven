// src/components/sidebar/Sidebar.tsx
import React from 'react';

export const SidebarMenu = ({ children }: { children: React.ReactNode }) => (
  <ul className="sidebar-menu space-y-2">
    {children}
  </ul>
);