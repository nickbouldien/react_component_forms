import React, { Component } from 'react';

class GreetingInput extends Component {
  handleChange(event){
    this.props.updateGreeting(event.target.value)
  }

  render() {
    // debugger;

    return (
      <input value={this.props.greeting} onChange={this.handleChange.bind(this)} />
    );
  }
}

export default GreetingInput;
