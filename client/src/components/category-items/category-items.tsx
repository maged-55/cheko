import React from "react";
import { Card, Col, Row } from "antd";
import "./category-items.css";
import { FILTER_OPTIONS } from "../../constants/filterConstants";
import { useTheme } from "../hooks/theme-context";

function CategoryItems({ categoryCounts }: any) {
  const { isDarkMode } = useTheme();

  return (
    <Row
      gutter={[16, 16]}
      justify="center"
      className={`card-container ${isDarkMode ? "dark-mode" : ""}`}
    >
      {FILTER_OPTIONS.map((card, index) => (
        <Col key={index} xs={8} sm={8} md={4} lg={4}>
          <Card
            className={`card-item ${isDarkMode ? "dark-mode" : ""}`}
            bordered={false}
            style={{ backgroundColor: isDarkMode ? card.bgColor : "" }}
          >
            <div className="card-content">
              <div
                className="icon-wrapper"
                style={{
                  backgroundColor: card.bgColor,
                }}
              >
                <img src={card.icon} alt={card.label} />
              </div>
              <Row gutter={[8, 4]}>
                <Col lg={0} sm={0} md={0} xs={0} />
                <Col className="card-label">{card.label}</Col>
                <Col className="card-count">
                  {categoryCounts[card.label] || 0}
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CategoryItems;
