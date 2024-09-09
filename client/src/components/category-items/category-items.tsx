import { Card, Col, Row } from "antd";
import "./category-items.css";
import { FILTER_OPTIONS } from "../../constants/filterConstants";

function CategoryItems({ categoryCounts }: any) {
  console.log(categoryCounts);

  return (
    <Row gutter={[16, 16]} justify="center" className="card-container">
      {FILTER_OPTIONS.map((card, index) => (
        <Col key={index} xs={8} sm={8} md={8} lg={4}>
          <Card className="card-item" bordered={false}>
            <div className="card-content">
              <div
                className="icon-wrapper"
                style={{ backgroundColor: card.bgColor }}
              >
                <img src={card.icon} alt={card.label} />
              </div>
              <Row  gutter={[8, 4]}>
                <Col lg={0} sm={0} md={0} xs={0} />
                <Col  className="card-label">
                  {card.label}
                </Col>
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
