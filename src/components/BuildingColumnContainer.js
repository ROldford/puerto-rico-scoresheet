import { connect } from 'react-redux';
import {
  toggleBuildingBuilt,
  toggleBuildingHasWorker,
  setBonusInput
} from '../actions/actionCreators';
import BuildingColumnLayout from './BuildingColumnLayout';

const getMatchingBuildings = (buildings, columnNumber) => {
  return buildings.filter(b => (b.points === columnNumber))
}

const mapStateToProps = (state, ownProps) => {
  return {
    buildingLevel: ownProps.columnNumber,
    buildings: getMatchingBuildings(state.buildings, ownProps.columnNumber)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBuildingClick: buildingName => {
      dispatch(toggleBuildingBuilt(buildingName))
    },
    onWorkerChange: buildingName => {
      dispatch(toggleBuildingHasWorker(buildingName))
    },
    onBonusInputChange: (buildingName, inputValue) => {
      dispatch(setBonusInput(buildingName, inputValue))
    }
  }
}

const BuildingColumnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BuildingColumnLayout)

export default BuildingColumnContainer;
