import React from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from "prop-types";
// import BuildingBonusInput from "./BuildingBonusInput";

const BuildingBonusPanelLayout = ({
  name,
  hasWorker,
  bonusInput,
  onWorkerChange
}) => {
  let inputFormCode;
  if (bonusInput !== null) {
    inputFormCode = (<p>Input</p>);
  } else {
    inputFormCode = "";
  }
  // const handleBonusInputCode = (e) => {props.setBonusContributor(
  //   parseInt(e.target.value, 10)
  // )};

  // Both label and checkbox need stopPropagation
  // or clicks will trigger toggleBuilt
  return(
    <div>
      <hr className="my-1"/>
      <Form inline className="justify-content-center">
        <FormGroup check>
          <Label className="mx-1" check onClick={e => e.stopPropagation()}>
            <Input
              type="checkbox"
              checked={hasWorker}
              onClick={e => e.stopPropagation()}
              onChange={() => onWorkerChange(name)}
            /> 👷🏾 ?
          </Label>
        </FormGroup>
        {inputFormCode}
      </Form>
    </div>
  )
};

BuildingBonusPanelLayout.propTypes = {
  name: PropTypes.string.isRequired,
  hasWorker: PropTypes.bool.isRequired,
  bonusInput: PropTypes.object,
  onWorkerChange: PropTypes.func
}

export default BuildingBonusPanelLayout;
