import React from 'react';

// Define the types for the card props
interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

// Main Card wrapper
export const Card = ({ className = "", children }: CardProps) => {
  return (
    <div className={`rounded-lg shadow-lg bg-white p-4 ${className}`}>
      {children}
    </div>
  );
};

// Header for the Card
export const CardHeader = ({ children, className = "" }: CardHeaderProps) => {
  return (
    <div className={`pb-4 border-b border-gray-200 ${className}`}>
      {children}
    </div>
  );
};

// Title of the Card (usually inside the CardHeader)
export const CardTitle = ({ children, className = "" }: CardTitleProps) => {
  return (
    <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>
  );
};

// Content of the Card
export const CardContent = ({ children, className = "" }: CardContentProps) => {
  return (
    <div className={`pt-4 ${className}`}>{children}</div>
  );
};

// Exporting all components for reuse
export default {
};
