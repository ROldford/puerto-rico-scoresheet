import React from 'react';
import {
  Card, 
  CardHeader, 
  Col
} from 'reactstrap';
import PropTypes from "prop-types";
import Building from "./Building";

const BuildingColumn = (props) => {
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
              isBuilt={building.isBuilt}
              isActive={building.isActive}
              hasBonusPanel={buildingLevel >= 4 ? true : false}
            />
          )
        }
      )}
    </Col>
  )
};

BuildingColumn.propTypes = {
  columnData: PropTypes.object.isRequired
};

export default BuildingColumn;