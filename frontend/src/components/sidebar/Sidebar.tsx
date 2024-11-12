// Sidebar.tsx

import React from 'react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from './SidebarMenu';
import { useSidebar } from './SidebarProvider';
import Link from 'next/link';
import { Home, Calendar, Users, FileText, BarChart2, Settings, HelpCircle, LogOut } from 'lucide-react';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed, className, children }) => {
  const menuItems = [
    { icon: <Home className="h-5 w-5" />, label: 'Dashboard', href: '/dashboard' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Appointments', href: '/appointments' },
    { icon: <Users className="h-5 w-5" />, label: 'Clients', href: '/clients' },
    { icon: <FileText className="h-5 w-5" />, label: 'Content Hub', href: '/content-hub' },
    { icon: <BarChart2 className="h-5 w-5" />, label: 'Campaigns', href: '/campaigns' },
    { icon: <BarChart2 className="h-5 w-5" />, label: 'Analytics', href: '/analytics' },
  ];

  const footerItems = [
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', href: '/settings' },
    { icon: <HelpCircle className="h-5 w-5" />, label: 'Help', href: '/help' },
    { icon: <LogOut className="h-5 w-5" />, label: 'Logout', href: '/logout' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} sidebar ${className} flex flex-col`}>
      <div className="flex-1">
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
          Toggle
        </button>
        {children}
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
      <div className="mt-auto">
        <SidebarMenu>
          {footerItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild>
                <Link href={item.href} className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>
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

// Export SidebarMenu, SidebarMenuItem, and SidebarMenuButton
export { SidebarMenu, SidebarMenuItem, SidebarMenuButton };

