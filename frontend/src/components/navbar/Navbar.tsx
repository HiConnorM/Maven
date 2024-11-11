// Navbar.tsx
import React from 'react';

interface NavbarProps {
  onMenuClick: () => void; // Declare the onMenuClick prop
  title?: string; // Optional title prop if needed
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick, title }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button onClick={onMenuClick} className="mr-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              {/* Example Menu Icon */}
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {title && <h1 className="text-2xl font-semibold">{title}</h1>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
