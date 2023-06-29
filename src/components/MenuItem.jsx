import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const MenuItem = ({ image, title, category, description, price }) => {
  return (
    <Col lg={4} md={4} sm={6} xs={12} className="mb-3">
      <Card>
        <Card.Img variant="top" src={image} alt="img" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <span className="menu-price">$ {price}</span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuItem;
