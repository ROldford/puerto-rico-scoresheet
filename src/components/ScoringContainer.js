import { connect } from 'react-redux';
import ScoringLayout from './ScoringLayout';

const mapStateToProps = state => {
  return {
    vpChips: state.vpChips
  }
}

const ScoringContainer = connect(
  mapStateToProps
)(ScoringLayout)

export default ScoringContainer;
