// Sidebar.tsx
import React from 'react';

interface SidebarProps {
  className?: string;
  isOpen: boolean;
}

export function Sidebar({ className, isOpen }: SidebarProps) {
  return <div className={`${className} ${isOpen ? 'block' : 'hidden'}`}>Sidebar Placeholder</div>;
}
