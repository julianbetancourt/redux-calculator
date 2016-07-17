import React, { Component } from 'react';
import GetDisplay from './containers/GetDisplay';
import HandleDisplay from './containers/HandleDisplay';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="calculator">
          <GetDisplay />
          <HandleDisplay />
        </div>
      </div>
    );
  }
}
