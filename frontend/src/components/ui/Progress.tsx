import React from 'react';

interface ProgressProps {
  value: number; // Value of the progress, from 0 to 100
  className?: string;
  color?: string; // Optional prop to specify color for the progress bar
}

export const Progress = ({ value, className = '', color = 'bg-blue-500' }: ProgressProps) => {
  return (
    <div className={`w-full h-2 bg-gray-200 rounded-full ${className}`}>
      <div
        className={`h-full ${color} rounded-full`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default Progress;
