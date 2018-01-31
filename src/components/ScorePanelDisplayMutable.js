import React from 'react';
import {
  Badge, 
  Col, 
  Row
} from 'reactstrap';

function ScorePanelDisplayMutable(props) {
  return(
    <Row NoGutters>
      <Col className="small-padding text-right"><Badge href="#">+</Badge></Col>
      <Col xs="auto" className="small-padding">
        {
          props.isScoreLarge ?
          <h2>{props.scoreValue}</h2> :
          <h4>{props.scoreValue}</h4>
        }
      </Col>
      <Col className="small-padding text-left"><Badge href="#">-</Badge></Col>
    </Row>
  );
}

export default ScorePanelDisplayMutable;