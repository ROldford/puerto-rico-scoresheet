import React from 'react';
import {Input, Form, FormGroup, Label} from 'reactstrap';
import PropTypes from "prop-types";

function BuildingBonusInput(props) {
  return(
    <FormGroup>
      <label for={props.inputId} className="sr-only">
        {props.labelText}
      </label>
      <input 
        type="text"
        id={props.inputId} 
        placeholder={props.inputPlaceholder} 
        value={props.inputValue} 
        className="form-control-sm" 
        onChange={props.handleBonusInput} 
        onClick={(e) => {e.stopPropagation();}}
      />
    </FormGroup>
  )
};
// TODO: Change this to use basic JSX elements instead of reactstrap

BuildingBonusInput.propTypes = {
  inputId: PropTypes.string.isRequired, 
  labelText: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOf([
    PropTypes.string, 
    PropTypes.number
  ]).isRequired, 
  bonusContribValue: PropTypes.number, 
  handleBonusInput: PropTypes.func.isRequired,
}

export default BuildingBonusInput;

// (      <Label for={props.inputId} hidden>
//         {props.labelText}
//       </Label>
//       <Input
//         id={props.inputId}
//         placeholder={props.inputPlaceholder}
//         value={props.inputValue} 
//         bsSize="sm" 
//         onChange={props.handleBonusInput}
//       /> )