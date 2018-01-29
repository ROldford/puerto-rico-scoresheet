import React from 'react';
import {
  Card, 
  CardSubtitle, 
  CardTitle, 
  Col, 
  Container, 
  Row
} from 'reactstrap';

/*const BuildingSelector = () => (
  <Card body className="text-center">
    <CardTitle>
      BuildingSelector test card
    </CardTitle>
    <CardSubtitle>
      This is a test card for the BuildingSelector.
    </CardSubtitle>
  </Card>
);*/

const BuildingSelector = () => (
  <Container>
    <Row>
      <Col>
        <p>Building</p>
        <p>Building</p>
      </Col>
      <Col>
        <p>Building</p>
        <p>Building</p>
      </Col>
      <Col>
        <p>Building</p>
        <p>Building</p>
      </Col>
      <Col>
        <p>Building</p>
        <p>Building</p>
      </Col>      
    </Row>
  </Container>
);

export default BuildingSelector;