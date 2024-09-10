import React from "react";
import { Row, Col, Divider } from "antd";
import "./cards.css";
import ProductCard from "./product-card/product-card";

interface CardsProps {
  items: Array<{
    id: string;
    name: string;
    calorie: number;
    price: number;
    image: string;
    description: string;
  }>;
}

console.log("cards");

const Cards: React.FC<CardsProps> = ({ items }) => {
  return (
    <>
      <Row className="cards-container" gutter={[16, 16]}>
        <Divider
          style={{ fontSize: "28px",marginBlockStart:'0px' }}
          orientation="left"
          orientationMargin="12"
        >
          Breakfast
        </Divider>
        {items.map((item) => (
          <Col
            key={item.id}
            xs={24}
            sm={12}
            md={12}
            lg={8}
            style={{ cursor: "pointer" }}
          >
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cards;
