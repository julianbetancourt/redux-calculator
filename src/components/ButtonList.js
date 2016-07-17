import React, { Component } from 'react';
import Button from './Button';

const removeButtons = ["C", ""];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const operators = ["/", "*", "-", "+", "="];

export default class ButtonList extends Component {
  render() {
    return (
      <div className="buttons">
        <div className="remove">
          {
            removeButtons.map(btn => {
              if (!btn) {
                return <Button type="removeSingle" arrow="ion-backspace-outline" key={btn} K={btn} {...this.props} onClick={() => this.props.onRemoveSingleClick()} />
              } else {
                return <Button type="removeAll" onClick={() => this.props.onRemoveAllClick()} key={btn} K={btn} {...this.props} />
              }
            })
          }
        </div>
        <div className="numbers-operators">
          <div className="numbers">
            {
              numbers.map(btn => <Button key={btn} K={btn} onClick={() => this.props.onNumberClick(btn) } {...this.props} />)
            }
          </div>
          <div className="operators">
            {
              operators.map(btn => {
                if (btn === "/") {
                  return <Button onClick={() => this.props.onOperatorClick(btn)} key={btn} K={'\u00f7'} {...this.props} />
                } else if (btn === "*") {
                  return <Button onClick={() => this.props.onOperatorClick(btn)} key={btn} K="x" {...this.props} />
                } else if (btn === "="){
                  return <Button onClick={() => this.props.onEqualsClick()} key={btn} K={btn} {...this.props} />
                } else {
                  return <Button onClick={() => this.props.onOperatorClick(btn)} key={btn} K={btn} {...this.props} />
                }
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
