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
                console.log(name)
              }}
            />
          )
        }
      )}
    </Row>
  </Container>
);

BuildingSelector.propTypes = {
  buildingsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default BuildingSelector;