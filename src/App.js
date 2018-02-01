import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import BuildingSelector from './components/BuildingSelector';
import Scoring from './components/Scoring';

let BUILDINGS_LIST = 
[
  {
    buildingLevel: 1,
    buildings: [
      {
        buildingName: "Small Indigo Plant", 
        buildingType: "production-small", 
        buildingPoints: 1,
        isBuilt: true, 
        isActive: true,
      },
      {
        buildingName: "Small Sugar Mill", 
        buildingType: "production-small", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Small Market", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Hacienda", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Construction Hut", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Small Warehouse", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
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
        isActive: true,
      },
      {
        buildingName: "Sugar Mill", 
        buildingType: "production-large", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Hospice", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Office", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Large Market", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Large Warehouse", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
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
        isActive: true,
      },
      {
        buildingName: "Coffee Roaster", 
        buildingType: "production-large", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Factory", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "University", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Harbor", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
      },
      {
        buildingName: "Wharf", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
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
        isBuilt: true, 
        isActive: false,
      },
      {
        buildingName: "Customs House", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: true, 
        isActive: true,
      },
      {
        buildingName: "Residence", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
      },
      {
        buildingName: "City Hall", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
      },
      {
        buildingName: "Fortress", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
      },
    ]
  },
];
// TODO: Move this data into a separate file (JSON?)

class App extends Component {
  state = {
    vpChips: 21, 
    buildingColumns: BUILDINGS_LIST, 
  }

  // Handler functions
  changeScore = (changeType) => {
    let changeValue;
    if (changeType === "increment") {
      changeValue = 1;
    } else if (changeType === "decrement") {
      changeValue = -1;
    } else {
      changeValue = 0;
    }
    this.setState({
      vpChips: (this.state.vpChips + changeValue)
    });
  }

  toggleBoolPropertyOf = (property, buildingToChange) => {
    this.setState({
      buildingColumns: this.state.buildingColumns.map((column) => {
        return({
          ...column,
          buildings: column.buildings.map((building) => {
            if (building.buildingName === buildingToChange) {
              return({
                ...building, 
                [property]: !building[property]
              }); // end return
            } // end if
            return building;
          }) // end .map
        }); // end return
      }) // end .map
    }); // end setState
  }

  toggleBuiltOf = (buildingToChange) => {
    this.toggleBoolPropertyOf("isBuilt", buildingToChange);
  }
  toggleActiveOf = (buildingToChange) => {
    this.toggleBoolPropertyOf("isActive", buildingToChange);
  }

  // State calculation functions
  getTotalVpScore = () => {
    return this.state.vpChips + 
      this.getVpBuildings() + 
      this.getVpBonuses();
  };

  getVpBuildings = () => {
    let returnValue = 0;
    const flattenedBuildingArray = this.state.buildingColumns.reduce(
      (acc, cur) => acc.concat(cur.buildings), 
      []
    );
    returnValue = flattenedBuildingArray.reduce(
      (acc, cur) => {
        if (cur.isBuilt) {
          return acc + cur.buildingPoints;
        } else {
          return acc;
        }
      }, 0
    );
    return returnValue;
  };

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
                changeScore={this.changeScore}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <BuildingSelector 
                buildingsData={this.state.buildingColumns} 
                toggleBuiltOf={this.toggleBuiltOf}
                toggleActiveOf={this.toggleActiveOf}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
