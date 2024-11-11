import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Menu, Search } from 'lucide-react';

interface NavbarProps {
  onSidebarToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  return (
    <header className="bg-white shadow-sm w-full fixed top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onSidebarToggle}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="ml-4 text-2xl font-semibold text-gray-900">Maven</h1>
        </div>

        {/* Search Bar, Notifications, and User Settings */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* Notifications */}
          <Button variant="outline" size="icon">
            <Bell size={18} />
          </Button>

          {/* User Avatar */}
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="Dr. Smith" />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
