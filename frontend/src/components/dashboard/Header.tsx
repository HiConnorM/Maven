import React from 'react';
import { Button } from '@/components/ui/Button';
import  Input  from '@/components/ui/Input';
import Avatar from '@/components/ui/Avatar';
import { Search, Menu, Bell } from 'lucide-react';

function Header(): React.JSX.Element {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="ml-4 text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        {/* Search and Notifications */}
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
          
        </div>
      </div>
    </header>
  );
}

// Make sure there's only one default export
export default Header;
