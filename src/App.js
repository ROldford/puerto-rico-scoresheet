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
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Small Sugar Mill", 
        buildingType: "production-small", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Small Market", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Hacienda", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Construction Hut", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Small Warehouse", 
        buildingType: "violet", 
        buildingPoints: 1,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
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
        bonusContributor: 0, 
      },
      {
        buildingName: "Sugar Mill", 
        buildingType: "production-large", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Hospice", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Office", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Large Market", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Large Warehouse", 
        buildingType: "violet", 
        buildingPoints: 2,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
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
        bonusContributor: 0, 
      },
      {
        buildingName: "Coffee Roaster", 
        buildingType: "production-large", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Factory", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "University", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Harbor", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
      },
      {
        buildingName: "Wharf", 
        buildingType: "violet", 
        buildingPoints: 3,
        isBuilt: false, 
        isActive: true,
        bonusContributor: 0, 
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
        isActive: false, 
        bonusContributor: 0, 
        bonusCalculator: null,
      },
      {
        buildingName: "Customs House", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false, 
        bonusContributor: 0, 
        bonusCalculator: null,
      },
      {
        buildingName: "Residence", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
        bonusContributor: 0, 
        bonusCalculator: null,
      },
      {
        buildingName: "City Hall", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false, 
        bonusContributor: 0, 
        bonusCalculator: null,
      },
      {
        buildingName: "Fortress", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
        bonusContributor: 2, 
        bonusCalculator: null, 
      },
    ]
  },
];
// TODO: Move this data into a separate file (JSON?)

class App extends Component {
  state = {
    vpChips: 0, 
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

  changePropertyOf = (buildingToChange, otherArgs, callback) => {
    this.setState({
      buildingColumns: this.state.buildingColumns.map((column) => {
        return({
          ...column,
          buildings: column.buildings.map((building) => {
            if (building.buildingName === buildingToChange) {
              // changeProperty(building, args)
              // changeProperty is passed in as a callback
              // changeProperty will edit the building state object
              // then will return it back
              // This lets the "building scanner" code run generically
              // args is an object holding all other arguments
              return (callback(building, otherArgs));
            } // end if
            return building;
          }) // end .map
        }); // end return
      }) // end .map
    }); // end setState
  }

  callbackForToggleBoolPropertyOf = (building, otherArgs) => {
    if ("property" in otherArgs) {
      return({
          ...building, 
          [otherArgs.property]: !building[otherArgs.property]
        });
    } else {
      console.log('otherArgs did not contain key "property"');
    }
  }

  callbackForSetBonusContributorOf = (building, otherArgs) => {
    if ("contrib" in otherArgs) {
      return({
          ...building, 
          bonusContributor: otherArgs.contrib
        });
    } else {
      console.log('otherArgs did not contain key "contrib"');
    }
  }

  toggleBoolPropertyOf = (property, buildingToChange) => {
    const otherArgs = {property: property};
    this.changePropertyOf(
      buildingToChange, 
      otherArgs, 
      this.callbackForToggleBoolPropertyOf
    );
  }

  setBonusContributorOf = (contrib, buildingToChange) => {
    const otherArgs = {contrib: contrib};
    this.changePropertyOf(
      buildingToChange, 
      otherArgs, 
      this.callbackForSetBonusContributorOf);
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
                setBonusContributorOf={this.setBonusContributorOf}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
