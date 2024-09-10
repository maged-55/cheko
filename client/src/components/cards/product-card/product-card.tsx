import React, { useState, useCallback, memo } from "react";
import { Card, Button, Row, Col } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "./product-card.css";
import ModalCard from "../modal-card/modal-card";
import { useTheme } from "../../hooks/theme-context";

interface ProductCardProps {
  item: {
    id:string
    name: string;
    calorie: number;
    price: number;
    image: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = memo(({ item }) => {
  const { isDarkMode } = useTheme();
  const [quantity, setQuantity] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const increaseQuantity = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setQuantity((prev) => prev + 1);
  }, []);

  const decreaseQuantity = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setQuantity((prev) => Math.max(0, prev - 1));
  }, []);

  const handleCardClick = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <>
      <Card
        key={item.id}
        className={`product-card ${isDarkMode ? "dark-mode" : ""}`}
        onClick={handleCardClick}
      >
        <Row gutter={[16, 16]} align="middle" className="product-content">
          <Col xs={24} sm={12} md={12} lg={10} xl={10}>
            <img className="product-image" src={item.image} alt={item.name} />
          </Col>
          <Col xs={24} sm={12} md={12} lg={14} xl={14}>
            <div className="product-details">
              <div className="title-section">
                <h3 className="product-title">{item.name}</h3>
                <p className="product-calories">{item.calorie} Cal</p>
              </div>
              <div className="product-price-section">
                <span className="product-price">{item.price} SR</span>
                <div
                  className="quantity-controls"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Button
                    className="quantity-button"
                    icon={<MinusOutlined />}
                    onClick={decreaseQuantity}
                  />
                  <span className="quantity-count">{quantity}</span>
                  <Button
                    className="quantity-button"
                    icon={<PlusOutlined />}
                    onClick={increaseQuantity}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <ModalCard
        isVisible={isModalVisible}
        onClose={handleModalClose}
        item={item}
        quantity={quantity}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
      />
    </>
  );
});

export default ProductCard;
