import React from 'react';
import {
  Badge,
  Card, 
  CardGroup, 
  CardTitle, 
  CardText, 
  Col, 
  Container, 
  Input, 
  InputGroup, 
  Row
} from 'reactstrap';
import ScorePanelBottom from "./ScorePanelBottom";

const ScorePanel = (props) => (
  <Card className="text-center">
    <CardText>
      <p className="text-muted">{props.titleText}</p>
      <ScorePanelBottom 
        canChangeScore={props.canChangeScore} 
        isScoreLarge={props.isScoreLarge} 
        scoreValue={props.scoreValue} 
      />
    </CardText>
  </Card>
);

export default ScorePanel;