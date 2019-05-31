import React from 'react';
import {FormGroup} from 'reactstrap';
import PropTypes from "prop-types";

function BuildingBonusInputLayout(props) {
  return(
    <FormGroup>
      <label htmlFor={props.inputId} className="mx-1 sr-only">
        {props.labelText}
      </label>
      <input
        type="text"
        id={props.inputId}
        placeholder={props.inputPlaceholder}
        value={props.inputValue}
        className="form-control-sm"
        onChange={props.handleBonusInput}
        onClick={(e) => {e.stopPropagation()}}
      />
    </FormGroup>
  )
};

BuildingBonusInputLayout.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  handleBonusInput: PropTypes.func.isRequired,
}

export default BuildingBonusInputLayout;
