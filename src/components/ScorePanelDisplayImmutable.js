import React from 'react';

function ScorePanelDisplayImmutable(props) {
  return(
    <div>
      {
        props.isScoreLarge ?
        <h2>{props.scoreValue}</h2> :
        <h4>{props.scoreValue}</h4>
      }
    </div>
  )
}

export default ScorePanelDisplayImmutable;