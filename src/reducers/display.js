import math from 'mathjs';

const isLastCharOperator = (str) => {
  if (str.charAt(str.length - 1) === "+" || str.charAt(str.length - 1) === "-" || str.charAt(str.length - 1) === "/" || str.charAt(str.length - 1) === "*") {
    return true;
  } else {
    return false;
  }
}

const display = (state = "", action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return state + action.number.toString();
    case 'ADD_OPERATOR':
      if (isLastCharOperator(state)) {
        return state;
      } else {
        return state + action.operator.toString();
      }

    case 'SHOW_RESULT':
      if (isLastCharOperator(state)) {
        alert('last char must be a number, not an operator')
      }
      if (math.eval(state) % 1 !== 0) { //if decimal
        return parseFloat(math.eval(state)).toFixed(2).toString();
      } else {
        return math.eval(state).toString();
      }
    case 'REMOVE_SINGLE':
      return state.slice(0, state.length - 1)
    case 'REMOVE_ALL':
      return state.slice(state.length);
    default:
      return state;
  }
}

export default display;
