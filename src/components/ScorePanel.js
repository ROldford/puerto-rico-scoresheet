import React from 'react';
import ScorePanelDisplayImmutable from "./ScorePanelDisplayImmutable";
import ScorePanelDisplayMutable from "./ScorePanelDisplayMutable";

function ScorePanel(props) {
  const canChangeScore = props.canChangeScore;
  let scoreDisplayCode;
    if (canChangeScore) {
    scoreDisplayCode = (
      <ScorePanelDisplayMutable 
        isScoreLarge={props.isScoreLarge} 
        scoreValue={props.scoreValue} 
      />
    );
  } else {
    scoreDisplayCode = (
      <ScorePanelDisplayImmutable 
        isScoreLarge={props.isScoreLarge} 
        scoreValue={props.scoreValue} 
      />
    );
  }
  return(
    <div className="text-center bordered-round">
      <p className="text-muted">{props.titleText}</p>
      {scoreDisplayCode}
    </div>
  );
}

export default ScorePanel;