import React from 'react';

interface CheckIconProps {
  size?: number;
}

const CheckIcon: React.FC<CheckIconProps> = ({ size = 16 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 20 16" fill="none">
    <path
      d="M17.2873 0.52068L7.30027 11.7091L2.71273 6.57177C2.09279 5.87753 1.08489 5.87753 0.464954 6.57177C-0.154985 7.26601 -0.154985 8.39471 0.464954 9.08895L6.17638 15.4804C6.47635 15.8119 6.87631 16 7.30027 16C7.72023 16 8.12419 15.8119 8.42416 15.4804L19.535 3.03786C20.155 2.34362 20.155 1.21492 19.535 0.52068C18.9151 -0.17356 17.9072 -0.17356 17.2873 0.52068Z"
      fill="var(--accent)"
    />
  </svg>
);

export default CheckIcon;
