import React from 'react';
import {
  Badge, 
  Col, 
  Row
} from 'reactstrap';

function ScorePanelDisplayMutable(props) {
  const isScoreLarge = props.isScoreLarge;
  const scoreValue = props.scoreValue;
  let scoreDisplayCode;
    if (isScoreLarge) {
    scoreDisplayCode = (<h2>{scoreValue}</h2>);
  } else {
    scoreDisplayCode = (<h4>{scoreValue}</h4>);
  }
  return(
    <Row>
      <Col className="text-right"><Badge href="#">+</Badge></Col>
      <Col xs="auto">{scoreDisplayCode}</Col>
      <Col className="text-left"><Badge href="#">-</Badge></Col>
    </Row>
  );
}

export default ScorePanelDisplayMutable;