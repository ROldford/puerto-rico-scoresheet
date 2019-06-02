import React from 'react';
import {
  Card,
  CardHeader,
  Col
} from 'reactstrap';
import PropTypes from "prop-types";
import BuildingLayout from "./BuildingLayout";

const BuildingColumnLayout = ({
  buildingLevel,
  buildings,
  onBuildingClick,
  onWorkerChange,
  onBonusInputChange
}) => (
  <Col>
    <Card className="text-center">
      <CardHeader>
        {buildingLevel}
      </CardHeader>
    </Card>
    {buildings.map(
      (building) => {
        return(
          <BuildingLayout
            key={building.name}
            {...building}
            onClick={() => onBuildingClick(building.name)}
            onWorkerChange={onWorkerChange}
            onBonusInputChange={onBonusInputChange} />
        )
      }
    )}
  </Col>
);

BuildingColumnLayout.propTypes = {
  buildingLevel: PropTypes.number.isRequired,
  buildings: PropTypes.array.isRequired,
  onBuildingClick: PropTypes.func.isRequired,
  onWorkerChange: PropTypes.func,
  onBonusInputChange: PropTypes.func,
};

export default BuildingColumnLayout;
