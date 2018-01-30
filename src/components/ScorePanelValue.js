import React from 'react';

function ScorePanelBottom(props) {
  const isScoreLarge = props.isScoreLarge;
  const scoreValue = props.scoreValue;
  if (isScoreLarge) {
    return(
      <h2>{scoreValue}</h2>
    );
  } else {
    return(
      <h4>{scoreValue}</h4>
    );
  }
}

export default ScorePanelBottom;