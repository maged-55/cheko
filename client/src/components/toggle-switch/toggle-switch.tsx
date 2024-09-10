import React from "react";
import { Switch } from "antd";
import "./toggle-switch.css";
import SunnyIcon from "./icon/sunny-icon";
import MoonIcon from "./icon/moon-icon";
import { useTheme } from "../hooks/theme-context";


const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className="dark-mode-toggle">
      <div className="toggle-container">
        <SunnyIcon className="icon sun-icon" />
        <Switch
          checked={!isDarkMode}
          onChange={toggleDarkMode}
          className="vertical-switch"
        />
        <MoonIcon className="icon moon-icon" />
      </div>
    </div>
  );
};

export default DarkModeToggle;