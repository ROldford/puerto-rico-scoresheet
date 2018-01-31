import React from 'react';
import {
  Badge, 
  Col, 
  Row
} from 'reactstrap';

function ScorePanelDisplayMutable(props) {
  return(
    <Row>
      <Col className="text-right"><Badge href="#">+</Badge></Col>
      <Col xs="auto">
        {
          props.isScoreLarge ?
          <h2>{props.scoreValue}</h2> :
          <h4>{props.scoreValue}</h4>
        }
      </Col>
      <Col className="text-left"><Badge href="#">-</Badge></Col>
    </Row>
  );
}

export default ScorePanelDisplayMutable;