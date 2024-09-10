import React, { useState, useEffect } from "react";
import { Input, Button, Row, Col, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./search-bar.css";
import CustomFilterIcon from "../../icons/filter-icon";
import { FILTER_LABELS } from "../../../constants/filterConstants";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "../../hooks/theme-context";

const { Option } = Select;

const SearchBar = () => {
  const { isDarkMode } = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || ""
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category")?.split(",").filter(Boolean) || []
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const categories =
      searchParams.get("category")?.split(",").filter(Boolean) || [];
    setSearchTerm(search);
    setSelectedCategories(categories);
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategorySelect = (value: string[]) => {
    setSelectedCategories(value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchClick = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (selectedCategories.length > 0)
      params.set("category", selectedCategories.join(","));
    setSearchParams(params);
  };

  return (
    <div className={`search-bar-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Row align="middle" className="search-bar" gutter={16}>
        <Col xs={10} sm={12} md={11}>
          <Input
            value={searchTerm}
            onChange={handleSearchChange}
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
            placeholder="Filter"
            value={selectedCategories}
            onChange={handleCategorySelect}
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
          <Button
            onClick={handleSearchClick}
            className="search-button"
            type="primary"
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBar;
