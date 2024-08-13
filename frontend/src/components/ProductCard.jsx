import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={product.image} />
        <Card.Title>{product.name}</Card.Title>
        {/* <Card.Text>{product.category}</Card.Text> */}
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
