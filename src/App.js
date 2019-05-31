import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header';
import ScoringContainer from './components/ScoringContainer';
import BuildingGridLayout from './components/BuildingGridLayout';
// TODO: Clean up unused dependencies in package.JSON

const App = () => (
  <div className="scoresheet">
    <Container fluid={true}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <ScoringContainer />
        </Col>
      </Row>
      <Row>
        <Col>
          <BuildingGridLayout />
        </Col>
      </Row>
    </Container>
  </div>
)

export default App;

// <Row>
//   <Col>
//     <BuildingSelector
//       buildingsData={this.state.buildingColumns}
//       toggleBuiltOf={this.toggleBuiltOf}
//       toggleActiveOf={this.toggleActiveOf}
//       setBonusContributorOf={this.setBonusContributorOf}
//     />
//   </Col>
// </Row>



  // // General helper functions
  // isNumber = (valueToCheck) => {
  //   // Unary + in parseFloat speeds up some edge case checks
  //   // See https://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery
  //   return !isNaN(parseFloat(+valueToCheck)) && isFinite(valueToCheck)
  // }
  //
  // flattenBuildingColumnsInState = () => {
  //   return this.state.buildingColumns.reduce(
  //     (acc, cur) => acc.concat(cur.buildings),
  //     []
  //   );
  // }
  //
  //
  // // Handler helper functions
  // changePropertyOf = (buildingToChange, otherArgs, callback) => {
  //   this.setState({
  //     buildingColumns: this.state.buildingColumns.map((column) => {
  //       return({
  //         ...column,
  //         buildings: column.buildings.map((building) => {
  //           if (building.buildingName === buildingToChange) {
  //             // changeProperty(building, args)
  //             // changeProperty is passed in as a callback
  //             // changeProperty will edit the building state object
  //             // then will return it back
  //             // This lets the "building scanner" code run generically
  //             // args is an object holding all other arguments
  //             return (callback(building, otherArgs));
  //           } // end if
  //           return building;
  //         }) // end .map
  //       }); // end return
  //     }) // end .map
  //   }); // end setState
  // }
  //
  // callbackForToggleBoolPropertyOf = (building, otherArgs) => {
  //   if ("property" in otherArgs) {
  //     return({
  //         ...building,
  //         [otherArgs.property]: !building[otherArgs.property]
  //       });
  //   } else {
  //     console.log('otherArgs did not contain key "property"');
  //   }
  // }
  //
  // callbackForSetBonusContributorOf = (building, otherArgs) => {
  //   if ("contrib" in otherArgs) {
  //     if (this.isNumber(otherArgs.contrib)) {
  //       return({
  //           ...building,
  //           bonusContributor: otherArgs.contrib
  //       });
  //     } else {
  //       return({
  //           ...building,
  //           bonusContributor: ""
  //       });
  //     }
  //   } else {
  //     console.log('otherArgs did not contain key "contrib"');
  //   }
  // }
  //
  // toggleBoolPropertyOf = (property, buildingToChange) => {
  //   const otherArgs = {property: property};
  //   this.changePropertyOf(
  //     buildingToChange,
  //     otherArgs,
  //     this.callbackForToggleBoolPropertyOf
  //   );
  // }
  //
  //
  // // State calculation helper functions
  // countBuiltBuildings = (buildingType) => {
  //   let returnValue = 0;
  //   const flattenedBuildingArray = this.flattenBuildingColumnsInState();
  //   returnValue = flattenedBuildingArray.reduce(
  //     (acc, cur) => {
  //       if (cur.buildingType === buildingType && cur.isBuilt) {
  //         return acc + 1;
  //       } else {
  //         return acc;
  //       }
  //     }, 0
  //   );
  //   return returnValue;
  // }
  //
  // getVpBonusFor = (building) => {
  //   let buildingBonusPoints = 0;
  //   if (building.isActive && building.isBuilt) {
  //     switch (building.buildingName) {
  //       case "Guild Hall":
  //         buildingBonusPoints = (
  //           building.otherArgs.productionLgCount * 2 +
  //           building.otherArgs.productionSmCount
  //         );
  //         break;
  //       case "Customs House":
  //         buildingBonusPoints = Math.floor(building.otherArgs.vpChips / 4);
  //         // buildingBonusPoints = 2;
  //         break;
  //       case "Residence":
  //         buildingBonusPoints = (
  //           building.bonusContributor <= 4 ?
  //           4 :
  //           (building.bonusContributor - 5)
  //         );
  //         break;
  //       case "City Hall":
  //         buildingBonusPoints = building.otherArgs.productionVioletCount;
  //         break;
  //       case "Fortress":
  //         buildingBonusPoints = Math.floor(building.bonusContributor / 3);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   return buildingBonusPoints;
  // }
  //
  // getVpBonuses = () => {
  //   const vpBuildings = this.state.buildingColumns[3].buildings;
  //   const otherArgs = {
  //     vpChips: this.state.vpChips,
  //     productionLgCount: this.countBuiltBuildings("production-large"),
  //     productionSmCount: this.countBuiltBuildings("production-small"),
  //     productionVioletCount: this.countBuiltBuildings("violet")
  //   }
  //   const adjustedBuildingArray = vpBuildings.map(
  //     (building) => {
  //       return ({
  //         ...building,
  //         otherArgs
  //       });
  //     }
  //   );
  //   const buildingVpBonusArray = adjustedBuildingArray.map(this.getVpBonusFor);
  //   return buildingVpBonusArray.reduce((acc, cur) => acc + cur);
  // };
  //
  // getVpBuildings = () => {
  //   let returnValue = 0;
  //   const flattenedBuildingArray = this.flattenBuildingColumnsInState();
  //   returnValue = flattenedBuildingArray.reduce(
  //     (acc, cur) => {
  //       if (cur.isBuilt) {
  //         return acc + cur.buildingPoints;
  //       } else {
  //         return acc;
  //       }
  //     }, 0
  //   );
  //   return returnValue;
  // };
  //
  //
  // // Handler functions
  // changeVpChipCount = (changeType) => {
  //   let changeValue;
  //   if (changeType === "increment") {
  //     changeValue = 1;
  //   } else if (changeType === "decrement" && this.state.vpChips > 0) {
  //     changeValue = -1;
  //   } else {
  //     changeValue = 0;
  //   }
  //   this.setState({
  //     vpChips: (this.state.vpChips + changeValue)
  //   });
  // }
  //
  // toggleBuiltOf = (buildingToChange) => {
  //   this.toggleBoolPropertyOf("isBuilt", buildingToChange);
  // }
  //
  // toggleActiveOf = (buildingToChange) => {
  //   this.toggleBoolPropertyOf("isActive", buildingToChange);
  // }
  //
  // setBonusContributorOf = (contrib, buildingToChange) => {
  //   const otherArgs = {contrib: contrib};
  //   this.changePropertyOf(
  //     buildingToChange,
  //     otherArgs,
  //     this.callbackForSetBonusContributorOf);
  // }
  //
  //
  // // State calculation functions
  // getTotalVpScore = () => {
  //   return this.state.vpChips +
  //     this.getVpBuildings() +
  //     this.getVpBonuses();
  // };
  //
  // getVpScoreObject = () => {return {
  //   vpChips: this.state.vpChips,
  //   vpBuildings: this.getVpBuildings(),
  //   vpBonuses: this.getVpBonuses()
  // };}
