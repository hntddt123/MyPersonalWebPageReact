import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="bgDark">
      <div className="container">
        <Row className="row">
          <Col className="text-center">
            <h5>&copy; Copyright 2022, Nientai Ho</h5>
          </Col>
          <Col className="text-center">
            <a href="#Top" aria-label="ToTop" className="btn btn-outline-light">
              <FontAwesomeIcon icon={faArrowUp} />
            </a>
          </Col>
          <Col className="text-center">
            <h5>Dream is your future reality</h5>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
