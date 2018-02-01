import React from 'react';
import {
  Card, 
  CardHeader, 
  Col
} from 'reactstrap';
import PropTypes from "prop-types";
import Building from "./Building";

const BuildingColumn = (props) => {
  return(
    <Col>
      <Card className="text-center">
        <CardHeader>
          {props.columnData.buildingLevel}
        </CardHeader>
      </Card>
      {props.columnData.buildings.map(
        (building) => {
          return(
            <Building 
              key={building.buildingName}
              buildingName={building.buildingName} 
              isBuilt={building.isBuilt}
              isActive={building.isActive}
              hasBonusPanel={
                props.columnData.buildingLevel >= 4 ? true : false
              }
              handleBuilt={(e) => {
                props.toggleBuiltOf(building.buildingName);
              }}
              handleActive={() => {
                props.toggleActiveOf(building.buildingName);
              }}
            />
          )
        }
      )}
    </Col>
  )
};
// TODO: Remove e from handleBuilt in return

BuildingColumn.propTypes = {
  columnData: PropTypes.shape({
      buildingLevel: PropTypes.number.isRequired,
      buildings: PropTypes.array.isRequired, 
    }).isRequired, 
  toggleBuiltOf: PropTypes.func.isRequired, 
};

export default BuildingColumn;