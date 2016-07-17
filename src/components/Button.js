import React, { Component } from 'react';

export default class Button extends Component {

  render() {
    return (
      <div onClick={this.props.onClick} className="button">
        <span className={this.props.arrow}>{this.props.K}</span>
      </div>
    );
  }
}
