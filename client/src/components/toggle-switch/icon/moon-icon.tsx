import React from "react";

interface MoonIconProps {
  className?: string;
}

const MoonIcon: React.FC<MoonIconProps> = ({ className }) => (
  <svg
    width="6"
    height="8"
    viewBox="0 0 6 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_3_20)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.06981 4C3.06981 2.275 4.29136 0.809007 6 0.247757C5.52082 0.090257 5.00537 0 4.46509 0C1.99909 0 0 1.791 0 4C0 6.20925 1.99909 8 4.46509 8C5.00537 8 5.52082 7.90974 6 7.75224C4.29136 7.19099 3.06981 5.72525 3.06981 4Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_20">
        <rect width="6" height="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default MoonIcon;