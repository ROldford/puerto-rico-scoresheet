import { connect } from 'react-redux';
import ScoringComponent from './ScoringComponent';

const mapStateToProps = state => {
  return {
    vpChips: state.vpChips
  }
}

const ScoringContainer = connect(
  mapStateToProps
)(ScoringComponent)

export default ScoringContainer;
