import React from 'react';

const LogoIcon = ({ className }) => {
  return (
    <svg 
      className={className || ''} 
      width="40" 
      height="36" 
      viewBox="0 0 40 36" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Hexagon - C */}
      <g transform="translate(12, 0)">
        <polygon 
          points="8,0 16,4.6 16,13.8 8,18.4 0,13.8 0,4.6" 
          fill="#7cb342" 
          stroke="#000000" 
          strokeWidth="1"
        />
        <text 
          x="8" 
          y="12" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fill="#000000" 
          fontWeight="bold" 
          fontSize="10"
        >
          C
        </text>
      </g>
      
      {/* Bottom Left Hexagon - T */}
      <g transform="translate(0, 18)">
        <polygon 
          points="8,0 16,4.6 16,13.8 8,18.4 0,13.8 0,4.6" 
          fill="#7cb342" 
          stroke="#000000" 
          strokeWidth="1"
        />
        <text 
          x="8" 
          y="12" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fill="#000000" 
          fontWeight="bold" 
          fontSize="10"
        >
          T
        </text>
      </g>
      
      {/* Bottom Right Hexagon - I */}
      <g transform="translate(24, 18)">
        <polygon 
          points="8,0 16,4.6 16,13.8 8,18.4 0,13.8 0,4.6" 
          fill="#7cb342" 
          stroke="#000000" 
          strokeWidth="1"
        />
        <text 
          x="8" 
          y="12" 
          textAnchor="middle" 
          dominantBaseline="middle" 
          fill="#000000" 
          fontWeight="bold" 
          fontSize="10"
        >
          I
        </text>
      </g>
      
      {/* Connector Lines */}
      <line 
        x1="16" 
        y1="16" 
        x2="12" 
        y2="20" 
        stroke="#d1c4e9" 
        strokeWidth="1" 
      />
      <line 
        x1="24" 
        y1="16" 
        x2="28" 
        y2="20" 
        stroke="#d1c4e9" 
        strokeWidth="1" 
      />
    </svg>
  );
};

export default LogoIcon;
