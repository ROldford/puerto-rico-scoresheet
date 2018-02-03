import React from 'react';
import PropTypes from "prop-types";
import BuildingBonusPanel from "./BuildingBonusPanel";

function Building(props) {
  const builtStatusStyle = (props.isBuilt ? "bg-success" : "bg-light");
  let bonusPanelCode;
  if (props.hasBonusPanel) {
    bonusPanelCode=(
      <BuildingBonusPanel 
        buildingName={props.buildingName} 
        bonusContributor={props.bonusContributor}
        isActive={props.isActive} 
        handleActive={() => props.handleActive()} 
        setBonusContributor={
          (contrib) => props.setBonusContributorOf(contrib, props.buildingName)
        }
      />
    );
  } else {
    bonusPanelCode="";
  }

  return(
    <div 
      className={`${builtStatusStyle} text-center bordered-round`} 
      onClick={props.handleBuilt} 
      id={props.buildingName}
    >
      {props.buildingName}
      {bonusPanelCode}
    </div>
  )
};

Building.propTypes = {
  buildingName: PropTypes.string.isRequired, 
  bonusContributor: PropTypes.number, 
  isBuilt: PropTypes.bool.isRequired, 
  isActive: PropTypes.bool.isRequired, 
  hasBonusPanel: PropTypes.bool.isRequired, 
  handleBuilt: PropTypes.func.isRequired, 
  setBonusContributorOf: PropTypes.func, 
}

export default Building;