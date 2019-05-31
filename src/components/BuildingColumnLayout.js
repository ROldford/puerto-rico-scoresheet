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
  onWorkerChange
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
            onWorkerChange={onWorkerChange} />
        )
      }
    )}
  </Col>
);

BuildingColumnLayout.propTypes = {
  buildings: PropTypes.array.isRequired
};

export default BuildingColumnLayout;
