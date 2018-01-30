import React from 'react';
import {
  Col, 
  Container, 
  Row, 
  Badge, 
} from 'reactstrap';

function Building(props) {
  const buildingName = props.buildingName;
  const buildingType = props.buildingType;
  let buildingTypeIcon;
  switch (buildingType) {
    case 'production-large':
      buildingTypeIcon = "🏭";
      break;
    case 'production-small':
      buildingTypeIcon = "📦";
      break;
    case 'violet':
      buildingTypeIcon = "🏛";
      break;
    default:
      buildingTypeIcon = "🏛";
      break;
  }
  // TODO: Add tooltips for emoji icons and button
  return(
    <div className="bordered-round text-center">
      <Container>
        <Row>
          <Col><small><Badge href="#" color="light">🏗 ?</Badge></small></Col>
          <Col><small>{buildingTypeIcon}</small></Col>
        </Row>
        <Row>
          <Col><strong>{buildingName}</strong></Col>
        </Row>
      </Container>
    </div>
  )
};

export default Building;