import React from 'react';
import {
  Container, 
  Row
} from 'reactstrap';
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
            />
          )
        }
      )}
    </Row>
  </Container>
);

export default BuildingSelector;