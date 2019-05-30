import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const ChipChangeButtonComponent = ({ buttonText, idValue, onButtonClick }) => (
  <Badge onClick={onButtonClick} href="#" id={idValue}>
    {buttonText}
  </Badge>
)

ChipChangeButtonComponent.propTypes = {
  buttonText: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default ChipChangeButtonComponent;
