import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeVpChips } from '../actions/actionCreators';
import ChipChangeButtonLayout from './ChipChangeButtonLayout';

const mapStateToProps = (state, ownProps) => {
  return {
    buttonText: ownProps.buttonText,
    idValue: ownProps.idValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: () => {
      dispatch(changeVpChips(ownProps.direction, ownProps.amount))
    }
  }
}

const ChipChangeButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChipChangeButtonLayout)

ChipChangeButtonContainer.propTypes = {
  buttonText: PropTypes.string.isRequired,
  idValue: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
}

export default ChipChangeButtonContainer;
