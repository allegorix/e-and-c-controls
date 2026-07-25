import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showText = true }) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    custom: '',
  };

  return (
    <div className={`inline-flex items-center ${heightClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 540 130"
        className="h-full w-auto max-w-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left E Mark */}
        <g id="e-symbol">
          <path
            d="M 64 12
               H 204
               L 186 36
               H 64
               C 50 36 44 42 44 50
               C 44 58 50 64 64 64
               H 168
               L 152 86
               H 64
               C 50 86 44 92 44 100
               C 44 108 50 114 64 114
               H 204
               V 130
               H 64
               C 30 130 18 108 18 100
               C 18 84 30 75 40 70
               C 30 65 18 56 18 42
               C 18 20 38 12 64 12 Z"
            fill="#DCE6F8"
          />
        </g>

        {/* Lightning Bolt */}
        <polygon
          points="218,12 174,72 212,72 198,128 254,62 216,62"
          fill="#F15A24"
        />

        {showText && (
          <g id="logo-text">
            {/* E&C */}
            <text
              x="272"
              y="72"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="900"
              fontSize="66"
              fill="#F15A24"
              letterSpacing="-1"
            >
              E&amp;C
            </text>

            {/* CONTROLS */}
            <text
              x="274"
              y="110"
              fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="800"
              fontSize="28"
              fill="#98A5F8"
              letterSpacing="3"
            >
              CONTROLS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
