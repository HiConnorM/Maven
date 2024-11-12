import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import { Sidebar, SidebarHeader, SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/sidebar/Sidebar';
import { useSidebar } from '@/components/sidebar/SidebarProvider';
import Link from 'next/link';
import { Home, BarChart2, Users, Calendar, Settings } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isOpen, toggleSidebar } = useSidebar();

  const menuItems = [
    { icon: <Home className="w-5 h-5" />, label: 'Home', href: '/' },
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Analytics', href: '/analytics' },
    { icon: <Users className="w-5 h-5" />, label: 'Clients', href: '/clients' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Dashboard', href: '/dashboard' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} className="w-64 bg-white border-r">
        <SidebarHeader>
          <h2 className="text-xl font-bold">Moso Marketing</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <Link 
                    href={item.href}
                    className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <div className="flex-1 overflow-auto">
        <Navbar onMenuClick={toggleSidebar} title="Home" />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;