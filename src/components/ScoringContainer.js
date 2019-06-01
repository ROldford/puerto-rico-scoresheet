import { connect } from 'react-redux';
import ScoringLayout from './ScoringLayout';

const getBuildingsScore = buildings => {
  let buildingsScore = 0;
  const scoreReducer = (acc, cur) => {
    return(cur.isBuilt ? acc + cur.points : acc);
  }
  return buildings.reduce(scoreReducer, 0);
}

const mapStateToProps = state => {
  return {
    vpChips: state.vpChips,
    buildingsScore: getBuildingsScore(state.buildings)
  }
}

const ScoringContainer = connect(
  mapStateToProps
)(ScoringLayout)

export default ScoringContainer;
