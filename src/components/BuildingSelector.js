import React from 'react';
import {
  Container, 
  Row
} from 'reactstrap';
import PropTypes from "prop-types";
import BuildingColumn from "./BuildingColumn";

const BuildingSelector = (props) => (
  <Container>
    <Row>
      {props.buildingsData.map(
        (column, index) => {
          return(
            <BuildingColumn 
              key={column.buildingLevel}
              columnData={column} 
              toggleBuiltOf={(name) => {
                props.toggleBuiltOf(name);
              }}
              toggleActiveOf={(name) => {
                props.toggleActiveOf(name);
              }}
              setBonusContributorOf={
                (contrib, buildingToChange) => props.setBonusContributorOf(
                  contrib, buildingToChange
                )
              }
            />
          )
        }
      )}
    </Row>
  </Container>
);

BuildingSelector.propTypes = {
  buildingsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired, 
  toggleBuiltOf: PropTypes.func.isRequired, 
  toggleActiveOf: PropTypes.func.isRequired, 
  setBonusContributorOf: PropTypes.func, 
}

export default BuildingSelector;