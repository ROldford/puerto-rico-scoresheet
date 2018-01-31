import React from 'react';
import {
  Col, 
  Container, 
  Row, 
  Badge, 
} from 'reactstrap';
import PropTypes from "prop-types";
import BuildingBonusPanel from "./BuildingBonusPanel";

function Building(props) {
  const buildingName = props.buildingName;
  const builtStatusStyle = (props.isBuilt ? "bg-success" : "bg-light");
  let bonusPanelCode;
  if (props.hasBonusPanel) {
    bonusPanelCode=(<BuildingBonusPanel buildingName={buildingName}/>);
  } else {
    bonusPanelCode="";
  }

  // TODO: Add tooltips for emoji icons and button
  return(
    <div className={`${builtStatusStyle} text-center bordered-round`}>
      {buildingName}
      {bonusPanelCode}
    </div>
  )
};

Building.propTypes = {
  buildingName: PropTypes.string.isRequired, 
  buildingType: PropTypes.string.isRequired, 
  isBuilt: PropTypes.bool.isRequired, 
}

export default Building;