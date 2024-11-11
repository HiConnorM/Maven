// Sidebar.tsx

import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Sidebar = ({ isOpen, className, children }: SidebarProps) => {
  return (
    <aside className={`${isOpen ? 'block' : 'hidden'} sidebar ${className}`}>
      {children}
    </aside>
  );
};

export const SidebarHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="sidebar-header px-6 py-4">
    {children}
  </div>
);

export const SidebarContent = ({ children }: { children: React.ReactNode }) => (
  <div className="sidebar-content flex-1 px-4 py-4">
    {children}
  </div>
);

export const SidebarFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="sidebar-footer px-4 py-4">
    {children}
  </div>
);

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
