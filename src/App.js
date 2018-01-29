import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import ScoringInput from './components/ScoringInput';


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
            <Col>
              <ScoringInput />
            </Col>
        </Container>
      </div>
    );
  }
}

export default App;
