import React from 'react';
import PropTypes from 'prop-types';

const ScoreDisplay = ({ titleText, isScoreLarge, scoreValue }) => (
  <>
    <p className="text-muted">{titleText}</p>
    <div>
      {
        isScoreLarge ?
        <h2>{scoreValue}</h2> :
        <h4>{scoreValue}</h4>
      }
    </div>
  </>
)

ScoreDisplay.propTypes = {
  titleText: PropTypes.string.isRequired,
  isScoreLarge: PropTypes.bool,
  scoreValue: PropTypes.number.isRequired,
}

export default ScoreDisplay;
