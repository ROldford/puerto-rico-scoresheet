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
      },
      {
        buildingName: "Customs House", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false, 
        bonusContributor: 0, 
      },
      {
        buildingName: "Residence", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
        bonusContributor: 0, 
      },
      {
        buildingName: "City Hall", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false, 
        bonusContributor: 0, 
      },
      {
        buildingName: "Fortress", 
        buildingType: "violet", 
        buildingPoints: 4,
        isBuilt: false, 
        isActive: false,
        bonusContributor: 0,  
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


  // General helper functions
  // TODO: Move helper functions here
  countBuiltBuildings = (buildingType) => {
    // const flattenedBuildingArray = this.state.buildingColumns.reduce(
    //   (acc, cur) => acc.concat(cur.buildings), 
    //   []
    // );
    return 1;
    // TODO: Finish this
  }

  isNumber = (valueToCheck) => {
    // Unary + in parseFloat speeds up some edge case checks
    // See https://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery
    return !isNaN(parseFloat(+valueToCheck)) && isFinite(valueToCheck)
  }


  // Handler helper functions
  // TODO: Change function name changeScore to changeVpChipCount everywhere

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
      if (this.isNumber(otherArgs.contrib)) {
        return({
            ...building, 
            bonusContributor: otherArgs.contrib
        });
      } else {
        return({
            ...building, 
            bonusContributor: ""
        });
      }
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


  // State calculation helper functions
  getVpBonusFor = (building) => {
    let buildingBonusPoints = 0;
    if (building.isActive && building.isBuilt) {
      switch (building.buildingName) {
        case "Guild Hall":
          buildingBonusPoints = (
            building.otherArgs.productionLgCount * 2 + 
            building.otherArgs.productionSmCount
          );
          break;
        case "Customs House":
          buildingBonusPoints = Math.floor(building.otherArgs.vpChips / 4);
          // buildingBonusPoints = 2;
          break;
        case "Residence":
          buildingBonusPoints = (
            building.bonusContributor <= 4 ? 
            4 : 
            (building.bonusContributor - 5)  
          );
          break;
        case "City Hall":
          buildingBonusPoints = building.otherArgs.productionVioletCount;
          break;
        case "Fortress":
          buildingBonusPoints = Math.floor(building.bonusContributor / 3);
          break;
        default:
          break;
      }
    }
    return buildingBonusPoints;
  }

  getVpBonuses = () => {
    const vpBuildings = this.state.buildingColumns[3].buildings; 
    const otherArgs = {
      vpChips: this.state.vpChips, 
      productionLgCount: this.countBuiltBuildings("production-large"), 
      productionSmCount: this.countBuiltBuildings("production-small"), 
      productionVioletCount: this.countBuiltBuildings("violet")
    }
    const adjustedBuildingArray = vpBuildings.map(
      (building) => {
        return ({
          ...building, 
          otherArgs
        });
      }
    );
    const buildingVpBonusArray = adjustedBuildingArray.map(this.getVpBonusFor);
    return buildingVpBonusArray.reduce((acc, cur) => acc + cur);
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

  toggleBuiltOf = (buildingToChange) => {
    this.toggleBoolPropertyOf("isBuilt", buildingToChange);
  }

  toggleActiveOf = (buildingToChange) => {
    this.toggleBoolPropertyOf("isActive", buildingToChange);
  }

  setBonusContributorOf = (contrib, buildingToChange) => {
    const otherArgs = {contrib: contrib};
    this.changePropertyOf(
      buildingToChange, 
      otherArgs, 
      this.callbackForSetBonusContributorOf);
  }


  // State calculation functions
  getTotalVpScore = () => {
    return this.state.vpChips + 
      this.getVpBuildings() + 
      this.getVpBonuses();
  };

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
