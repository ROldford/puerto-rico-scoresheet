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
              bonusContributor={building.bonusContributor} 
              isBuilt={building.isBuilt}
              isActive={building.isActive}
              hasBonusPanel={
                props.columnData.buildingLevel >= 4 ? true : false
              }
              handleBuilt={() => {
                props.toggleBuiltOf(building.buildingName);
              }}
              handleActive={() => {
                props.toggleActiveOf(building.buildingName);
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
    </Col>
  )
};

BuildingColumn.propTypes = {
  columnData: PropTypes.shape({
      buildingLevel: PropTypes.number.isRequired,
      buildings: PropTypes.array.isRequired, 
    }).isRequired, 
  toggleBuiltOf: PropTypes.func.isRequired, 
  toggleActiveOf: PropTypes.func.isRequired, 
  setBonusContributorOf: PropTypes.func, 
};

export default BuildingColumn;