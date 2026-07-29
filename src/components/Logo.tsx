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
  showText = true,
  variant = 'color',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24',
    custom: '',
  };

  // Color fills based on variant
  const getFills = () => {
    switch (variant) {
      case 'white':
        return {
          symbol: '#FFFFFF',
          bolt: '#FFFFFF',
          ecText: '#FFFFFF',
          controlsText: '#FFFFFF',
        };
      case 'black':
        return {
          symbol: '#1A1A1A',
          bolt: '#1A1A1A',
          ecText: '#1A1A1A',
          controlsText: '#1A1A1A',
        };
      case 'current':
        return {
          symbol: 'currentColor',
          bolt: 'currentColor',
          ecText: 'currentColor',
          controlsText: 'currentColor',
        };
      case 'color':
      default:
        return {
          symbol: '#DCE6F8',
          bolt: '#F15A24',
          ecText: '#F15A24',
          controlsText: '#98A5F8',
        };
    }
  };

  const fills = getFills();

  return (
    <div className={`inline-flex items-center ${heightClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 540 160"
        className="h-full w-auto max-w-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Symbol Group */}
        <g id="logo-mark">
          {/* Left E Symbol (Light Lavender / Ice Blue #DCE6F8) */}
          <path
            d="M 64 20 H 184 L 144 60 H 64 C 46 60 46 80 64 80 H 156 V 100 H 64 C 46 100 46 120 64 120 H 184 V 150 H 64 C 30 150 20 134 20 100 V 70 C 20 36 30 20 64 20 Z"
            fill={fills.symbol}
          />

          {/* Lightning Bolt (Electric Orange #F15A24) */}
          <polygon
            points="206,18 162,74 236,74 194,130 226,64 174,64"
            fill={fills.bolt}
          />
        </g>

        {showText && (
          <g id="logo-text">
            {/* E&C Text */}
            <text
              x="252"
              y="82"
              fontFamily="'Montserrat', 'Arial Black', 'Impact', system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="68"
              fill={fills.ecText}
              letterSpacing="-1.5"
            >
              E&amp;C
            </text>

            {/* CONTROLS Text */}
            <text
              x="254"
              y="120"
              fontFamily="'Segoe UI', 'Roboto', 'Helvetica Neue', system-ui, sans-serif"
              fontWeight="800"
              fontSize="28"
              fill={fills.controlsText}
              letterSpacing="4"
            >
              CONTROLS
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

