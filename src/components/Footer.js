import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="container">
      <Row className="row">
        <Col className="text-center">
          <h5>&copy; Copyright 2021, Nientai Ho</h5>
        </Col>
        <Col className=" text-center">
          <a href="#Top" className="btn btn-success"><FontAwesomeIcon icon={faArrowUp} style={{ color: '#FFFFFF' }} /></a>
        </Col>
        <Col className=" text-center">
          <h5>Dream is your future reality</h5>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;