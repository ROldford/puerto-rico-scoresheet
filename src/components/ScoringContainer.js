import { connect } from 'react-redux';
import { PRODUCTION_LARGE, PRODUCTION_SMALL, VIOLET } from '../reducers/buildingTypes';
import ScoringLayout from './ScoringLayout';

const getBuildingsScore = buildings => {
  const buildingsScoreReducer = (acc, cur) => {
    return(cur.isBuilt ? acc + cur.points : acc);
  }
  return buildings.reduce(buildingsScoreReducer, 0);
}

const getBonusScore = (buildings, vpChips) => {
  const buildingTypeCounts = {
    PRODUCTION_LARGE: countByType(buildings, PRODUCTION_LARGE),
    PRODUCTION_SMALL: countByType(buildings, PRODUCTION_SMALL),
    VIOLET: countByType(buildings, VIOLET)
  }
  const bonusScoreReducer = (acc, cur) => {
    return (acc + calculateBuildingBonus(cur, buildingTypeCounts, vpChips))
  }
  return buildings.reduce(bonusScoreReducer, 0)
}

const calculateBuildingBonus = (building, buildingTypeCounts, vpChips) => {
  const countProductionLarge = buildingTypeCounts.PRODUCTION_LARGE;
  const countProductionSmall = buildingTypeCounts.PRODUCTION_SMALL;
  const countViolet = buildingTypeCounts.VIOLET;
  if (building.hasWorker && building.isBuilt) {
    switch (building.name) {
      case "Guild Hall":
        return (
          countProductionSmall + 2 * countProductionLarge
        );
      case "Residence":
        if (building.bonusInput.value < 9) {
          return 0;
        } else if (building.bonusInput.value > 12) {
          return 0;
        } else {
          return building.bonusInput.value - 5;
        }
      case "Fortress":
        return Math.floor(building.bonusInput.value/3);
      case "Customs House":
        return Math.floor(vpChips/4);
      case "City Hall":
        return countViolet;
      default:
        return 0
    }
  } else {
    return 0;
  }
}

const countByType = (buildings, type) => {
  const countTypeReducer = (acc, cur) => {
    return ((cur.type === type && cur.isBuilt) ? acc + 1 : acc)
  }
  return buildings.reduce(countTypeReducer, 0)
}

const mapStateToProps = state => {
  const currBuildingsScore = getBuildingsScore(state.buildings);
  const currBonusScore = getBonusScore(state.buildings, state.vpChips);
  const currTotalScore = state.vpChips + currBuildingsScore + currBonusScore;
  return {
    vpChips: state.vpChips,
    buildingsScore: currBuildingsScore,
    bonusScore: currBonusScore,
    totalScore: currTotalScore
  }
}

const ScoringContainer = connect(
  mapStateToProps
)(ScoringLayout)

export default ScoringContainer;
