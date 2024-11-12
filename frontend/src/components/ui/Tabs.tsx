import React from 'react';

interface TabsProps {
  defaultValue?: string;
  className?: string;
  children: React.ReactNode;
}

interface TabsListProps {
  className?: string;
  children: React.ReactNode;
}

interface TabsTriggerProps {
  value: string;
  active?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface TabsContentProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ 
  defaultValue,
  className = "",
  children 
}) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  );
};

export const TabsList: React.FC<TabsListProps> = ({ 
  className = "",
  children 
}) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ 
  value,
  active,
  className = "",
  children,
  onClick 
}) => {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
        ${active ? 'bg-background text-foreground shadow-sm' : 'hover:bg-background/50'} 
        ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const TabsContent: React.FC<TabsContentProps> = ({ 
  value,
  className = "",
  children 
}) => {
  return (
    <div
      className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
};
