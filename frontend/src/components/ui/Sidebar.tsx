import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineDashboard,
  AiOutlineCalendar,
  AiOutlineFileText,
  AiOutlineMail,
  AiOutlineBarChart,
  AiOutlineClockCircle,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from 'react-icons/ai';

const Sidebar: React.FC = () => (
  <div className="w-64 h-screen bg-gray-800 text-white fixed">
    <div className="p-4 font-bold text-lg">Moso Marketing</div>
    <nav className="mt-10">
      <Link to="/dashboard" className="flex items-center p-4 hover:bg-gray-700">
        <AiOutlineDashboard className="mr-3" /> Dashboard
      </Link>
      {/* Add other links similarly */}
    </nav>
  </div>
);

export default Sidebar;