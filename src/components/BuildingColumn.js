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
              hasBonusPanel={
                props.columnData.buildingLevel >= 4 ? true : false
              }
            />
          )
        }
      )}
    </Col>
  )
};

BuildingColumn.propTypes = {
  columnData: PropTypes.shape({
      buildingLevel: PropTypes.number.isRequired,
      buildings: PropTypes.array.isRequired, 
    }).isRequired, 
};

export default BuildingColumn;