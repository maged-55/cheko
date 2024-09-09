import React from "react";
import { Modal, Button, Typography, Tag, Col } from "antd";
import { MinusOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import "./modal-card.css";

const { Title, Paragraph, Text } = Typography;

interface ItemDetailModalProps {
  isVisible: boolean;
  onClose: () => void;
  item: {
    name: string;
    calorie: number;
    price: number;
    image: string;
    description: string;
  };
  quantity: number;
  onIncreaseQuantity: () => void;
  onDecreaseQuantity: () => void;
}

const ModalCard: React.FC<ItemDetailModalProps> = ({
  isVisible,
  onClose,
  item,
  quantity,
  onIncreaseQuantity,
  onDecreaseQuantity,
}) => {
  return (
    <Modal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      width={575}
      bodyStyle={{ borderRadius: "98px" }}
      className="modal-card-container"
    >
      <div className="modal-card-content">
        <Title className="modal-card-title" level={4}>
          {item.name}
        </Title>
        <Text className="modal-card-calorie" type="secondary">
          {item.calorie} Cal
        </Text>
        <Paragraph className="modal-card-description">
          {item.description}
        </Paragraph>
        <div className="modal-card-image-container">
          <img src={item.image} alt={item.name} className="modal-card-image" />
        </div>
        <div className="modal-card-action-container">
          <div style={{ display: "flex", alignSelf: "self-end" }}>
            <Col>
              <Text className="modal-card-price">{item.price} SR</Text>
            </Col>
            <div className="modal-card-quantity-controls">
              <Button
                icon={<MinusOutlined />}
                className="modal-card-quantity-button"
                onClick={onDecreaseQuantity}
              />
              <Text className="modal-card-quantity-text">{quantity}</Text>
              <Button
                icon={<PlusOutlined />}
                className="modal-card-quantity-button"
                onClick={onIncreaseQuantity}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCard;
