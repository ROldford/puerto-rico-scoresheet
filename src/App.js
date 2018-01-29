import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import BuildingSelector from './components/BuildingSelector';
import Scoring from './components/Scoring';
// import ScoringInput from './components/ScoringInput';


class App extends Component {
  render() {
    return (
      <div className="scoresheet">
        <Container fluid={true}>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col><Scoring /></Col>
          </Row>
          <Row>
            <Col><BuildingSelector /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
