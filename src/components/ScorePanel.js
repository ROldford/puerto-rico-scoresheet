import React from 'react';
import ScorePanelBottom from "./ScorePanelBottom";

const ScorePanel = (props) => (
  <div className="text-center bordered-round">
    <p className="text-muted">{props.titleText}</p>
    <ScorePanelBottom 
      canChangeScore={props.canChangeScore} 
      isScoreLarge={props.isScoreLarge} 
      scoreValue={props.scoreValue} 
    />
  </div>
);

export default ScorePanel;