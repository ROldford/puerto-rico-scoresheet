import React from 'react';
import {
  Card, 
  CardHeader, 
  Col
} from 'reactstrap';
import Building from "./Building";

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
          return(
            <Building 
              key={building.buildingName}
              buildingName={building.buildingName} 
              buildingType={building.buildingType} 
            />
          )
        }
      )}
    </Col>
  )
};

export default BuildingColumn;