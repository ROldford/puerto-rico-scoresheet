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
import ScorePanel from "./ScorePanel"

const Scoring = () => (
  <Container>
    <Row>
      <Col>
        <ScorePanel 
          titleText="Total Points" 
          scoreValue="49" 
          isScoreLarge={true} 
          canChangeScore={false}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <hr />
      </Col>
    </Row>
    <Row>
      <Col>
        <CardGroup>
          <ScorePanel 
            titleText="VP Chips" 
            scoreValue="49" 
            isScoreLarge={false} 
            canChangeScore={true}
          />
          <ScorePanel 
            titleText="Buildings" 
            scoreValue="49" 
            isScoreLarge={false} 
            canChangeScore={false}
          />
          <ScorePanel 
            titleText="Bonuses" 
            scoreValue="49" 
            isScoreLarge={false} 
            canChangeScore={false}
          />
        </CardGroup>
      </Col>
    </Row>
  </Container>
);

export default Scoring;