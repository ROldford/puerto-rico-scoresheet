import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Header from './components/Header';
import ScoringInput from './components/ScoringInput';


class App extends Component {
  render() {
    return (
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <Header />
            </Col>
          </Row>
            <Col xs={12} md={8}>
              <ScoringInput />
            </Col>
        </Grid>
    );
  }
}

export default App;
