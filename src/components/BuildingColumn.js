import React from 'react';
import {
  Card, 
  CardSubtitle, 
  CardTitle, 
  CardHeader, 
  Col, 
  Container, 
  Row, 
  Badge, 
  CardText, 
  Button
} from 'reactstrap';
import Building from "./Building";

/*const BuildingSelector = () => (
  <Card body className="text-center">
    <CardTitle>
      BuildingSelector test card
    </CardTitle>
    <CardSubtitle>
      This is a test card for the BuildingSelector.
    </CardSubtitle>
  </Card>
);*/

// {
//         <Building 
//         buildingName="Test 1" 
//         buildingType="violet" 
//         isBuilt={false}
//       />
//       <Building 
//         buildingName="Test 2" 
//         buildingType="production-large" 
//         isBuilt={true}
//       />
//       <Building 
//         buildingName="Test 3" 
//         buildingType="production-small" 
//         isBuilt={false}
//       />
// }

function BuildingColumn(props) {
  const columnData = props.columnData;
  const buildingLevel = columnData.buildingLevel;
  const buildings = columnData.buildings;

  return(
    <Col>
      <Card className="text-center">
        <CardHeader>
          {buildingLevel}
        </CardHeader>
      </Card>
      {buildings.map(
        (building) => {
          <Building 
            buildingName={building.buildingName} 
            buildingType={building.buildingType} 
          />
        }
      )}
    </Col>
  )
};

export default BuildingColumn;