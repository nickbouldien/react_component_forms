import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import GreetingInput from './GreetingInput'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob'
    }
}

updateGreeting(greeting){
  // debugger
  this.setState({greeting: greeting })
}

  render() {
    // debugger;
    return (
      <div>
      <div className="App">
        <Header greeting={this.state.greeting} />
      </div>
      <div>
        <GreetingInput greeting={this.state.greeting} dog={this.updateGreeting.bind(this)} />
      </div>
    </div>
    );
  }
}

export default App;
