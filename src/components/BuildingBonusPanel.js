import React from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from "prop-types";
import BuildingBonusInput from "./BuildingBonusInput";

function BuildingBonusPanel(props) {
  let inputFormCode;
  switch (props.buildingName){
    case 'Residence':
      console.log(props.bonusContributor);
      inputFormCode = (
        <BuildingBonusInput 
          inputId="islandSpaces" 
          labelText="Total occupied island spaces" 
          inputPlaceholder="Island spaces" 
          inputValue = {
            (props.bonusContributor <= 0) ? "" : props.bonusContributor
          }
          handleBonusInput={e => props.setBonusContributor(e.target.value)}
        />
      );
      break;
    case 'Fortress':
      console.log(props.bonusContributor);
      inputFormCode = (
        <BuildingBonusInput 
          inputId="totalWorkers" 
          labelText="Total number of workers" 
          inputPlaceholder="Total workers" 
          inputValue = {
            (props.bonusContributor <= 0) ? "" : props.bonusContributor
          }
          handleBonusInput={
            e => props.setBonusContributor(parseInt(e.target.value, 10))
          }
        />
      );
      break;
    default:
      inputFormCode = "";
      break;
  }

  return(
    <div>
      <hr className="small-margin"/>
      <Form inline className="justify-content-center">
        <FormGroup check>
          <Label check>
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
  bonusContributor: PropTypes.number.isRequired, 
  isActive: PropTypes.bool.isRequired, 
  handleActive: PropTypes.func.isRequired, 
  setBonusContributor: PropTypes.func, 
}

export default BuildingBonusPanel;