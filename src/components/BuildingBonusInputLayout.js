import React from 'react';
import {FormGroup} from 'reactstrap';
import PropTypes from "prop-types";

const sanitizeInputValue = (value) => {
  const parsedValue = parseInt(value, 10);
  return (isNaN(parsedValue) ? '' : parsedValue);
}

const BuildingBonusInputLayout = ({
  name,
  inputId,
  value,
  labelText,
  inputPlaceholder,
  onBonusInputChange
}) => {
  return(
    <FormGroup>
      <label htmlFor={inputId} className="mx-1 sr-only">
        {labelText}
      </label>
      <input
        type="text"
        id={inputId}
        placeholder={inputPlaceholder}
        value={value}
        className="form-control-sm"
        onChange={
          (e) => onBonusInputChange(name, sanitizeInputValue(e.target.value))
        }
        onClick={(e) => {e.stopPropagation()}}
      />
    </FormGroup>
  )
};

BuildingBonusInputLayout.propTypes = {
  name: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  labelText: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  onBonusInputChange: PropTypes.func.isRequired
}

export default BuildingBonusInputLayout;
