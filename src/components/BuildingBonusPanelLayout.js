import React from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from "prop-types";
// import BuildingBonusInput from "./BuildingBonusInput";

const BuildingBonusPanelLayout = ({
  name,
  hasWorker,
  bonusInput,
  onChange
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

  return(
    <div>
      <hr className="my-1"/>
      <Form inline className="justify-content-center">
        <FormGroup check>
          <Label className="mx-1" check>
            <Input
              type="checkbox"
              checked={hasWorker}
              onChange={onChange}
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
  onChange: PropTypes.func
}

export default BuildingBonusPanelLayout;
