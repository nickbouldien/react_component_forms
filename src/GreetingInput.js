import React, { Component } from 'react';

class GreetingInput extends Component {
  handleChange(event){
    // debugger
    this.props.dog(event.target.value)
  }

  render() {
    // debugger;
  let greetingsLength = this.props.greeting.length
    //console.log(greetingsLength)
  let bla = "BLA"
  let result

  if (greetingsLength%3 === 0){
    result = bla.repeat(greetingsLength/3)
  } else if (greetingsLength % 3 === 1){
    result = bla.repeat(greetingsLength/3) + "B"
  }  else {
    result = bla.repeat(greetingsLength/3) + "BL"
  }

    return (
      <div>
        <div>
          <h4>Say something: <input value={this.props.greeting} onChange={this.handleChange.bind(this)} /></h4>
        </div>
        <div>
          <h4>Good Robot</h4>
          <p>I hear you saying {this.props.greeting}. Is that correct? </p>
        </div>
        <div>
          <h4>Bad Robot</h4>
          <p>I hear you saying {result}. Is that correct?</p>
        </div>
        <div>
          <h4>Kanyebot 5000</h4>
          <p>I'm gonna let you finish but Beyonce is {this.props.greeting}</p>
        </div>
      </div>
    );
  }
}

export default GreetingInput;
