import { connect } from 'react-redux';
import ButtonList from '../components/ButtonList';
import { addNumber, addOperator, showResult, removeAll, removeSingle } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onNumberClick: (number) => dispatch(addNumber(number)),
    onOperatorClick: (operator) => dispatch(addOperator(operator)),
    onEqualsClick: () => dispatch(showResult()),
    onRemoveAllClick: () => dispatch(removeAll()),
    onRemoveSingleClick: () => dispatch(removeSingle())
  }
}



const HandleDisplay = connect(null, mapDispatchToProps)(ButtonList);

export default HandleDisplay;
