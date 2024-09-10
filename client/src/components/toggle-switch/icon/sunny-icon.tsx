import React from "react";

interface SunnyIconProps {
  className?: string;
}

const SunnyIcon: React.FC<SunnyIconProps> = ({ className }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g clipPath="url(#clip0_3_17)">
      <path
        d="M3.8775 2.1475L2.9825 1.25L2.275 1.9575L3.1725 2.855L3.8775 2.1475ZM2.5 4.975H1V5.975H2.5V4.975ZM7 0H6V1.475H7V0ZM10.725 1.9575L10.0175 1.25L9.12 2.1475L9.8275 2.855L10.725 1.9575ZM9.1225 8.8025L10.02 9.7L10.7275 8.9925L9.83 8.095L9.1225 8.8025ZM10.5 4.975V5.975H12V4.975H10.5ZM6.5 2.475C4.8425 2.475 3.5 3.8175 3.5 5.475C3.5 7.1325 4.8425 8.475 6.5 8.475C8.1575 8.475 9.5 7.1325 9.5 5.475C9.5 3.8175 8.1575 2.475 6.5 2.475ZM6 10.95H7V9.475H6V10.95ZM2.275 8.9925L2.9825 9.7L3.88 8.8025L3.1725 8.095L2.275 8.9925Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_3_17">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SunnyIcon;
