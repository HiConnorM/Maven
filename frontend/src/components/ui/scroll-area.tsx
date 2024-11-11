import React from 'react';
import { cn } from '@/lib/utils'; // Utility function for combining classNames

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn('overflow-auto p-4', className)} {...props}>
      {children}
    </div>
  );
};

// Export default
export default ScrollArea;
