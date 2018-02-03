import React from 'react';
import PropTypes from 'prop-types';
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
        handleVpChipChange={e => props.changeVpChipCount(e.target.id)} 
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

ScorePanel.propTypes = {
  changeVpChipCount: PropTypes.func, 
  canChangeScore: PropTypes.bool.isRequired, 
  titleText: PropTypes.string.isRequired, 
}

export default ScorePanel;