import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="mt-5 bg-transparent">
      <Container fluid={true}>
        <Row>
          <Col
            className="p-0 d-flex justify-content-center text-secondary"
            md={12}
            sm={12}
          >
            Copyright &copy; Bianka Korban {new Date().getFullYear()}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
