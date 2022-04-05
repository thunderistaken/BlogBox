import React from "react";
import { Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Row className="fixed-bottom" style={{ background: "black" }}>
        <Col className="text-center py-1 text-white">
          Copyright &copy; BlogBox.
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
