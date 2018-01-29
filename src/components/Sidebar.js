import React from 'react';
import {
  Card, 
  CardText, 
  CardTitle, 
  Container, 
  Row, 
  Col
} from 'reactstrap';

const Sidebar = () => (
  <Card body className="text-center">
    <CardTitle>
      Scoring
    </CardTitle>
    <CardText>
      <Container>
        <Row>
          <Col xs="8">
            <p className="text-right">VP Chips:</p>
            <p className="text-right">Buildings:</p>
            <p className="text-right">Bonuses:</p>
          </Col>
          <Col xs="4">
            <p className="text-left">23</p>
            <p className="text-left">19</p>
            <p className="text-left">7</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="style1" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="text-right">Total Score:</p>
          </Col>
          <Col xs="4">
            <p className="text-left">49</p>
          </Col>
        </Row>
      </Container>
    </CardText>
  </Card>

);

export default Sidebar;