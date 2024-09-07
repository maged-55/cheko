import React, { useState, useMemo } from "react";
import { Input, Button, Row, Col, Tag, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./Search-bar.css";
import CustomFilterIcon from "../icons/filter-icon";
import { FILTER_LABELS } from "../../constants/filterConstants";

const { Option } = Select;

const SearchBar = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelect = (value: string[]) => {
    setSelectedItems(value);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="search-bar-container">
      <Row align="middle" className="search-bar" gutter={16}>
        <Col xs={10} sm={12} md={11}>
          <Input
            className="search-input"
            placeholder="Search"
            prefix={<SearchOutlined />}
          />
        </Col>

        <Col xs={14} sm={12} md={10} className="filter-container">
          <div className="filter-icon-wrapper" onClick={toggleDropdown}>
            <CustomFilterIcon />
          </div>
          <Select
            mode="multiple"
            className="select"
            placeholder="Filters"
            value={selectedItems}
            onChange={handleSelect}
            open={dropdownOpen}
            onDropdownVisibleChange={(open) => setDropdownOpen(open)}
            style={{ border: "none" }}
            dropdownRender={(menu) => <>{menu}</>}
          >
            {FILTER_LABELS.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        </Col>

        <Col className="search-button-container" xs={24} sm={24} md={3}>
          <Button className="search-button" type="primary">
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
