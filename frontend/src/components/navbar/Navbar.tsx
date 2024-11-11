import React from 'react';
import { Button } from "@/components/ui/Button";
import  Input  from "@/components/ui/Input";
import { Avatar } from "@/components/ui/Avatar";
import { Bell, Search, Menu } from 'lucide-react';

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onMenuClick: () => void;
}

export function Navbar({ title, onMenuClick, className }: NavbarProps) {
  return (
    <header className={`bg-white shadow-sm ${className}`}>
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onMenuClick}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="ml-4 text-2xl font-semibold text-gray-900">{title}</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          <Button variant="outline" size="icon">
            <Bell size={18} />
          </Button>
          {/* If Avatar src is undefined, it will fall back to initials or a placeholder */}
          <Avatar src="/placeholder-avatar.jpg" alt="Dr. Smith" />
        </div>
      </div>
    </header>
  );
}

