import React from 'react';
import PropTypes from 'prop-types';

const ScoreDisplayLayout = ({ titleText, isScoreLarge, scoreValue }) => (
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

ScoreDisplayLayout.propTypes = {
  titleText: PropTypes.string.isRequired,
  isScoreLarge: PropTypes.bool,
  scoreValue: PropTypes.number.isRequired,
}

export default ScoreDisplayLayout;
