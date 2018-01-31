import React from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from "prop-types";

function BuildingBonusPanel(props) {
  let inputFormCode;
  switch (props.buildingName){
    case 'Residence':
      inputFormCode = (
        <FormGroup>
          <Label for="islandSpaces" hidden>Total occupied island spaces</Label>
          <Input id="islandSpaces" placeholder="Island spaces" bsSize="sm" /> 
        </FormGroup>
      );
      break;
    case 'Fortress':
      inputFormCode = (
        <FormGroup>
          <Label for="totalWorkers" hidden>Total number of workers</Label>
          <Input id="totalWorkers" placeholder="Total workers" bsSize="sm" /> 
        </FormGroup>
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
            <Input type="checkbox" /> 👷🏾 ?
          </Label>
        </FormGroup>
        {inputFormCode}
      </Form>
    </div>
  )
};

BuildingBonusPanel.propTypes = {
  buildingName: PropTypes.string.isRequired
}

export default BuildingBonusPanel;