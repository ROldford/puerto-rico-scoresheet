import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import BuildingSelector from './components/BuildingSelector';
import Sidebar from './components/Sidebar';
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
            {
              // Sidebar with scorebox and place to enter VP chip count
            }
            <Col sm="2"><Sidebar/></Col>
            {
              // Building Selection Area
            }
            <Col sm="10"><BuildingSelector /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
