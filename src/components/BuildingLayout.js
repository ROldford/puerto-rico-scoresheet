import React from 'react';
import PropTypes from "prop-types";
// import BuildingBonusPanel from "./BuildingBonusPanel";

const BuildingLayout = ({ name, isBuilt, hasWorker, bonusInput, onClick }) => {
  const builtStatusStyle = (isBuilt ? "bg-success" : "bg-light");
  let bonusPanelCode;
  if (hasWorker !== null) {
    bonusPanelCode=(
      // <BuildingBonusPanel
      //   buildingName={buildingName}
      //   hasWorker={hasWorker}
      //   bonusInput={bonusInput} />
      <p>Bonus</p>
    );
  } else {
    bonusPanelCode="";
  }

  return(
    <div
      className={`${builtStatusStyle} text-center bordered-round`}
      onClick={onClick}
      id={name}
    >
      {name}
      {bonusPanelCode}
    </div>
  )
};

BuildingLayout.propTypes = {
  name: PropTypes.string.isRequired,
  isBuilt: PropTypes.bool.isRequired,
  hasWorker: PropTypes.bool,
  bonusInput: PropTypes.object,
  onClick: PropTypes.func.isRequired
}

export default BuildingLayout;
