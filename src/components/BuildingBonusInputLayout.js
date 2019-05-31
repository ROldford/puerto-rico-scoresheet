import React from 'react';
import {FormGroup} from 'reactstrap';
import PropTypes from "prop-types";

const BuildingBonusInputLayout = ({
  name,
  inputId,
  value,
  labelText,
  inputPlaceholder
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
        onChange={() => console.log(`${name} input value changed`)}
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
}

export default BuildingBonusInputLayout;
