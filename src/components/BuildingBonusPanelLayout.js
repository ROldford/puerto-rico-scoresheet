import React from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from "prop-types";
import BuildingBonusInput from "./BuildingBonusInput";

function BuildingBonusPanel(props) {
  let inputFormCode;
  const inputValuePropCode = (
    (props.bonusContributor <= 0) ? "" : props.bonusContributor
  );
  const handleBonusInputCode = (e) => {props.setBonusContributor(
    parseInt(e.target.value, 10)
  )};
  switch (props.buildingName){
    case 'Residence':
      inputFormCode = (
        <BuildingBonusInput 
          inputId="islandSpaces" 
          labelText="Total occupied island spaces" 
          inputPlaceholder="Island spaces" 
          inputValue = {inputValuePropCode} 
          handleBonusInput={handleBonusInputCode} 
        />
      );
      break;
    case 'Fortress':
      inputFormCode = (
        <BuildingBonusInput 
          inputId="totalWorkers" 
          labelText="Total number of workers" 
          inputPlaceholder="Total workers" 
          inputValue = {inputValuePropCode} 
          handleBonusInput={handleBonusInputCode} 
        />
      );
      break;
    default:
      inputFormCode = "";
      break;
  }

  return(
    <div>
      <hr className="my-1"/>
      <Form inline className="justify-content-center">
        <FormGroup check>
          <Label className="mx-1" check>
            <Input 
              type="checkbox" 
              checked={props.isActive} 
              onChange={props.handleActive}
            /> 👷🏾 ?
          </Label>
        </FormGroup>
        {inputFormCode}
      </Form>
    </div>
  )
};

BuildingBonusPanel.propTypes = {
  buildingName: PropTypes.string.isRequired, 
  bonusContributor: PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number
  ]).isRequired, 
  isActive: PropTypes.bool.isRequired, 
  handleActive: PropTypes.func.isRequired, 
  setBonusContributor: PropTypes.func, 
}

export default BuildingBonusPanel;