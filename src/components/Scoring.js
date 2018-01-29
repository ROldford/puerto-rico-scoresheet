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
        <ScorePanel titleText="Total Points" scoreValue="49" />
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
          <Card className="text-center">
            <CardText>
              <p className="text-muted">VP Chips</p>
              <Row>
                <Col className="text-right"><Badge href="#">+</Badge></Col>
                <Col xs="auto"><h4>23</h4></Col>
                <Col className="text-left"><Badge href="#">-</Badge></Col>
              </Row>
            </CardText>
          </Card>
          <Card className="text-center">
            <CardText>
              <p className="text-muted">Buildings</p>
              <h4>49</h4>
            </CardText>
          </Card>
          <Card className="text-center">
            <CardText>
              <p className="text-muted">Bonuses</p>
              <h4>49</h4>
            </CardText>
          </Card>
        </CardGroup>
      </Col>
    </Row>
  </Container>
);

export default Scoring;