import React from 'react';
import {
  Col, 
  Container, 
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
        <ScorePanel 
          titleText="VP Chips" 
          scoreValue="49" 
          isScoreLarge={false} 
          canChangeScore={true}
        />
      </Col>
      <Col>
        <ScorePanel 
          titleText="Buildings" 
          scoreValue="49" 
          isScoreLarge={false} 
          canChangeScore={false}
        />
      </Col>
      <Col>
        <ScorePanel 
          titleText="Bonuses" 
          scoreValue="49" 
          isScoreLarge={false} 
          canChangeScore={false}
        />
      </Col>
    </Row>
  </Container>
);

export default Scoring;