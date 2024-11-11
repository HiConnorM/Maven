import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    ghost: 'bg-transparent hover:bg-gray-200',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    outline: 'border border-gray-500 text-gray-700 hover:bg-gray-100',
  };

  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
    icon: 'p-2',
  };

  const combinedClassName = `${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;

  return (
    <button className={`rounded ${combinedClassName}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
