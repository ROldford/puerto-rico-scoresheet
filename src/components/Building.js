import React from 'react';
import {
  Card, 
  CardSubtitle, 
  CardTitle, 
  CardHeader, 
  Col, 
  Container, 
  Row, 
  Badge, 
  CardText, 
  Button
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

function Building(props) {
  const buildingName = props.buildingName;
  const buildingType = props.buildingType;
  return(
    <Card body className="text-center">
      <CardText>
        <Container >
          <Row noGutters={true}>
            <Col xs="12" lg="auto"><small><Badge href="#" color="light">🏗 ?</Badge></small></Col>
            <Col className="align-self-end"><h4>{buildingName}</h4></Col>
            <Col xs="12" lg="auto"><small>{buildingType}</small></Col>
          </Row>
        </Container>
      </CardText>
    </Card>
  )
};

export default Building;