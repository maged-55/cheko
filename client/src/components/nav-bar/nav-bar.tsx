import React from "react";
import { Menu, Input, Button, Switch } from "antd";
import { Header as Head } from "antd/es/layout/layout";

import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import "./nav-bar.css";
import SearchBar from "../search-bar/Search-bar";

const NavBar: React.FC = () => {
  const location = useLocation();
  const selectedKey =
    location.pathname === "/" ? "home" : location.pathname.substring(1);
  return (
    <div className="header-container">
      <div>
        <Menu
          mode="horizontal"
          selectedKeys={[selectedKey]}
          className="header-menu"
        >
          <Menu.Item className="menuItem" key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item className="menuItem" key="map">
            <Link to="/map">Map</Link>
          </Menu.Item>
        </Menu>
        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
