import React from 'react';
import {
  Badge, 
  Col, 
  Row
} from 'reactstrap';
import ScorePanelValue from "./ScorePanelValue";

function ScorePanelBottom(props) {
  const canChangeScore = props.canChangeScore;
  const isScoreLarge = props.isScoreLarge;
  const scoreValue = props.scoreValue;
  if (canChangeScore) {
    return(
      <Row>
        <Col className="text-right"><Badge href="#">+</Badge></Col>
        <Col xs="auto">
          <ScorePanelValue 
            isScoreLarge={isScoreLarge} 
            scoreValue={scoreValue} 
          />
        </Col>
        <Col className="text-left"><Badge href="#">-</Badge></Col>
      </Row>
    );
  } else {
    return(
      <ScorePanelValue 
        isScoreLarge={isScoreLarge} 
        scoreValue={scoreValue} 
      />
    );
  }
}

export default ScorePanelBottom;