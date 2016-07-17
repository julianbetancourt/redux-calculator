import React from 'react';
import { connect } from 'react-redux';
import Display from '../components/Display';

const mapStateToProps = (state) => {
  return {
    display: state.display
  }
}

const GetDisplay = connect(mapStateToProps)(Display)

export default GetDisplay;
