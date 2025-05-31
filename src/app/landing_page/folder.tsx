'use client'; // Optional if you're using this component with client-side interactivity

import React from 'react';

interface FolderCardProps {
  children?: React.ReactNode;
  className?: string;
}

const FolderCard: React.FC<FolderCardProps> = ({ children, className = '' }) => {
  return (
    <div className="relative">
      {/* SVG definition for the clip path */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="folder-clip" clipPathUnits="objectBoundingBox">
            <path d="
              M 0.95,0.05
              Q 0.98,0.05 0.98,0.08
              L 0.98,0.95
              Q 0.98,0.98 0.95,0.98
              L 0.05,0.98
              Q 0.02,0.98 0.02,0.95
              L 0.02,0.2
              Q 0.02,0.17 0.05,0.17
              L 0.27,0.17
              Q 0.30,0.17 0.32,0.14
              L 0.36,0.08
              Q 0.38,0.05 0.4,0.05
              L 0.92,0.05
              Q 0.95,0.05 0.95,0.05
              Z" />
          </clipPath>
        </defs>
      </svg>

      {/* The actual folder card */}
      <div
        className={`folder-card xxl:w-[467px] xxl:h-[486px] lg:w-[387px] lg:h-[438px] md:w-[387px] md:h-[438px] lg:h-[438px] sm:w-[380px] xs:w-[345px] bg-white shadow-lg  relative ${className}`}
        style={{ clipPath: 'url(#folder-clip)' }}
      >
        {children}
      </div>
    </div>
  );
};

export default FolderCard;
