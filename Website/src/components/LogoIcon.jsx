import React from 'react';

const LogoIcon = ({ className }) => {
  return (
    <img 
      src="/images/LogoUpdated.png" 
      alt="Chime Tex International Logo" 
      className={`object-contain ${className || 'h-10 w-auto'}`}
      style={{ 
        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))',
        borderRadius: '2px'
      }}
    />
  );
};

export default LogoIcon;
