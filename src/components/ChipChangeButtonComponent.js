import React from 'react';
import { Badge } from 'reactstrap';
import PropTypes from 'prop-types';

const ChipChangeButtonComponent = ({ buttonText, idValue, onButtonClick }) => {
  <Badge onClick={onButtonClick} href="#" id={idValue}>
    {buttonText}
  </Badge>
}

ChipChangeButtonComponent.propTypes = {
  buttonText: PropTypes.text.isRequired,
  idValue: PropTypes.text.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}
