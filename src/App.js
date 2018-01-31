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
        isBuilt: false, 
        buildingStyle: "resource-indigo",
      },
      {
        buildingName: "Small Sugar Mill", 
        buildingType: "production-small", 
        buildingPoints: 1,
        isBuilt: false, 
        buildingStyle: "resource-sugar",
      },
      {
        buildingName: "Small Market", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Hacienda", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Construction Hut", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Small Warehouse", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        buildingStyle: "violet",
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
        isBuilt: false, 
        buildingStyle: "resource-indigo",
      },
      {
        buildingName: "Sugar Mill", 
        buildingType: "production-large", 
        buildingPoints: 2,
        isBuilt: false, 
        buildingStyle: "resource-sugar",
      },
      {
        buildingName: "Hospice", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Office", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Large Market", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Large Warehouse", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        buildingStyle: "violet",
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
        isBuilt: false, 
        buildingStyle: "resource-tobacco",
      },
      {
        buildingName: "Coffee Roaster", 
        buildingType: "production-large", 
        buildingPoints: 3,
        isBuilt: false, 
        buildingStyle: "resource-coffee",
      },
      {
        buildingName: "Factory", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "University", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Harbor", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Wharf", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        buildingStyle: "violet",
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
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Customs House", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Residence", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "City Hall", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        buildingStyle: "violet",
      },
      {
        buildingName: "Fortress", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        buildingStyle: "violet",
      },
    ]
  },
];
// TODO: Move this data into a separate file (JSON?)

class App extends Component {
  state = {
    vpChips: 21, 
    buildings: BUILDINGS_LIST, 
  }

  getTotalVpScore = () => {
    return this.state.vpChips + 
      this.getVpBuildings() + 
      this.getVpBonuses();
  };
  getVpBuildings = () => {return 19};
  getVpBonuses = () => {return 12};
  getVpScoreObject = () => {return {
    vpChips: this.state.vpChips, 
    vpBuildings: this.getVpBuildings(), 
    vpBonuses: this.getVpBonuses()
  };}

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
            <Col>
              <Scoring 
                vpScore={this.getVpScoreObject()} 
                totalVpScore={this.getTotalVpScore()}
              />
            </Col>
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
