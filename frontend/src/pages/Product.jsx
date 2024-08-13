import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import data from "../assets/products/products.js";
import ProductCard from "../components/ProductCard.jsx";

const Product = () => {
  const [products, setProducts] = useState(data);

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product, index) => {
          return (
            <Col key={index} className="g-4">
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Product;
