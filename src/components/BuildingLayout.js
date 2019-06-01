import React from 'react';
import PropTypes from "prop-types";
import BuildingBonusPanelLayout from "./BuildingBonusPanelLayout";

const BuildingLayout = ({
  name,
  isBuilt,
  hasWorker,
  bonusInput,
  onClick,
  onWorkerChange,
  onBonusInputChange
}) => {
  const builtStatusStyle = (isBuilt ? "bg-success" : "bg-light");
  let bonusPanelCode;
  if (hasWorker !== null) {
    bonusPanelCode=(
      <BuildingBonusPanelLayout
        name={name}
        hasWorker={hasWorker}
        bonusInput={bonusInput}
        onWorkerChange={onWorkerChange}
        onBonusInputChange={onBonusInputChange} />
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
  onClick: PropTypes.func.isRequired,
  onWorkerChange: PropTypes.func,
  onBonusInputChange: PropTypes.func
}

export default BuildingLayout;
