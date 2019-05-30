import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeVpChips } from '../actions';
import ChipChangeButtonComponent from './ChipChangeButtonComponent';

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
  null,
  mapDispatchToProps
)(ChipChangeButtonComponent)

ChipChangeButtonComponent.propTypes = {
  buttonText: PropTypes.text.isRequired,
  idValue: PropTypes.text.isRequired,
  direction: PropTypes.text.isRequired,
  amount: PropTypes.number.isRequired
}

export default ChipChangeButtonContainer
