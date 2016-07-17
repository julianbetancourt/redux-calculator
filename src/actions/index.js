export const addNumber = (number) => {
  return {
    type: 'ADD_NUMBER',
    number
  }
}

export const addOperator = (operator) => {
  return {
    type: 'ADD_OPERATOR',
    operator
  }
}

export const showResult = () => {
  return {
    type: 'SHOW_RESULT'
  }
}

export const removeAll = () => {
  return {
    type: 'REMOVE_ALL'
  }
}

export const removeSingle = () => {
  return {
    type: 'REMOVE_SINGLE'
  }
}
