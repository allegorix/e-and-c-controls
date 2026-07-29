import React from 'react';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
  variant?: 'color' | 'white' | 'black' | 'current';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'color',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    custom: '',
  };

  const getLogoSrc = () => {
    switch (variant) {
      case 'white':
        return '/E&C Logo_white.png';
      case 'black':
        return '/E&C Logo_black.png';
      case 'color':
      default:
        return '/E&C Logo_full color.png';
    }
  };

  return (
    <div className={`inline-flex items-center ${heightClasses[size]} ${className}`}>
      {/* E&C Controls Logo */}
      <img
        src={getLogoSrc()}
        alt="E&C Controls Logo"
        className="ec-controls-logo h-full w-auto max-w-full"
      />
    </div>
  );
};

