import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  variant?: 'color' | 'white' | 'black' | 'current';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'h-[100px]',
    md: 'h-[150px]',
    lg: 'h-[240px]',
    xl: 'h-[360px]',
    custom: ''
  };

  return (
    <img 
      src="/logo.png" 
      alt="E&C Controls Logo" 
      className={`${sizeMap[size]} object-contain ${className}`}
    />
  );
};


