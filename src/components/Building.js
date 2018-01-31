import React from 'react';
import {
  Col, 
  Container, 
  Row, 
  Badge, 
} from 'reactstrap';
import PropTypes from "prop-types";

function Building(props) {
  const buildingName = props.buildingName;
  const buildingType = props.buildingType;
  const styleClassName = `bordered-round text-center ${props.buildingStyle}`;
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
    <div className={styleClassName}>
      <Container>
        <Row noGutters>
          <Col xs="auto"><div className="building-icons">🏗</div></Col>
          <Col></Col>
          <Col xs="auto"><div className="building-icons">{buildingTypeIcon}</div></Col>
        </Row>
        <Row noGutters>
          {
            buildingName.length <= 12 ?
            <Col>{buildingName}</Col> :
            <Col><small>{buildingName}</small></Col>
          }
        </Row>
      </Container>
    </div>
  )
};

Building.propTypes = {
  buildingName: PropTypes.string.isRequired, 
  buildingType: PropTypes.string.isRequired, 
  isBuilt: PropTypes.bool.isRequired, 
  buildingStyle: PropTypes.string.isRequired,
}

export default Building;