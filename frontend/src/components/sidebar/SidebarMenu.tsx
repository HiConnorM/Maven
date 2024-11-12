// src/components/sidebar/SidebarMenu.tsx
import React from 'react';

export const SidebarMenu = ({ children }: { children: React.ReactNode }) => (
  <ul className="sidebar-menu space-y-2">
    {children}
  </ul>
);

export const SidebarMenuItem = ({ children }: { children: React.ReactNode }) => (
  <li className="sidebar-menu-item">
    {children}
  </li>
);

export const SidebarMenuButton = ({
  children,
  asChild = false,
}: {
  children: React.ReactNode;
  asChild?: boolean;
}) => (
  <>
    {asChild ? (
      children
    ) : (
      <button className="sidebar-menu-button w-full text-left">
        {children}
      </button>
    )}
  </>
);