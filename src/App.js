import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import BuildingSelector from './components/BuildingSelector';
import Scoring from './components/Scoring';

const BUILDINGS_LIST = 
[
  {
    buildingLevel: 1,
    buildings: [
      {
        buildingName: "Small Indigo Plant", 
        buildingType: "production-small", 
        buildingPoints: 1,
      },
      {
        buildingName: "Small Sugar Mill", 
        buildingType: "production-small", 
        buildingPoints: 1,
      },
      {
        buildingName: "Small Market", 
        buildingType: "violet", 
        buildingPoints: 1,
      },
      {
        buildingName: "Hacienda", 
        buildingType: "violet", 
        buildingPoints: 1,
      },
      {
        buildingName: "Construction Hut", 
        buildingType: "violet", 
        buildingPoints: 1,
      },
      {
        buildingName: "Small Warehouse", 
        buildingType: "violet", 
        buildingPoints: 1,
      }, 
    ]
  },
  {
    buildingLevel: 2,
    buildings: [
      {
        buildingName: "Indigo Plant", 
        buildingType: "production-large", 
        buildingPoints: 2,
      },
      {
        buildingName: "Sugar Mill", 
        buildingType: "production-large", 
        buildingPoints: 2,
      },
      {
        buildingName: "Hospice", 
        buildingType: "violet", 
        buildingPoints: 2,
      },
      {
        buildingName: "Office", 
        buildingType: "violet", 
        buildingPoints: 2,
      },
      {
        buildingName: "Large Market", 
        buildingType: "violet", 
        buildingPoints: 2,
      },
      {
        buildingName: "Large Warehouse", 
        buildingType: "violet", 
        buildingPoints: 2,
      },
    ]
  },
  {
    buildingLevel: 3,
    buildings: [
      {
        buildingName: "Tobacco Storage", 
        buildingType: "production-large", 
        buildingPoints: 3,
      },
      {
        buildingName: "Coffee Roaster", 
        buildingType: "production-large", 
        buildingPoints: 3,
      },
      {
        buildingName: "Factory", 
        buildingType: "violet", 
        buildingPoints: 3,
      },
      {
        buildingName: "University", 
        buildingType: "violet", 
        buildingPoints: 3,
      },
      {
        buildingName: "Harbor", 
        buildingType: "violet", 
        buildingPoints: 3,
      },
      {
        buildingName: "Wharf", 
        buildingType: "violet", 
        buildingPoints: 3,
      },
    ]
  },
  {
    buildingLevel: 4,
    buildings: [
      {
        buildingName: "Guild Hall", 
        buildingType: "violet", 
        buildingPoints: 4,
      },
      {
        buildingName: "Customs House", 
        buildingType: "violet", 
        buildingPoints: 4,
      },
      {
        buildingName: "Residence", 
        buildingType: "violet", 
        buildingPoints: 4,
      },
      {
        buildingName: "City Hall", 
        buildingType: "violet", 
        buildingPoints: 4,
      },
      {
        buildingName: "Fortress", 
        buildingType: "violet", 
        buildingPoints: 4,
      },
    ]
  },
];
// TODO: Move this data into a separate file (JSON?)

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
            <Col><BuildingSelector buildingsData={BUILDINGS_LIST}/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
