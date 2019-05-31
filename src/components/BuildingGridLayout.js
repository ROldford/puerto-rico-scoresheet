import React from 'react';
import {
  Container,
  Row
} from 'reactstrap';
import BuildingColumnContainer from "./BuildingColumnContainer";

const BuildingSelector = () => (
  <Container>
    <Row>
      {[1, 2, 3, 4].map(
        (column) => {
          return(
            <BuildingColumnContainer
              key={column}
              columnNumber={column} />
          )
        }
      )}
    </Row>
  </Container>
);

export default BuildingSelector;
