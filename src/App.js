import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import GreetingInput from './GreetingInput';
import FormReact from './FormReact';
import CommuteForm from './CommuteForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting: 'Bob',
      userData: {
        firstName: '',
        lastName: '',
        email: ''
      },
      commuterData: {
        transportation: '',
        time: '',
        beverage:'',
        description:'',
        punctuality:''

      }
    }
}

updateGreeting(greeting){
  // debugger
  this.setState({greeting: greeting })
}

userDataUpdate(userData){
  this.setState({
    userData: userData
  })
}
commuterDataUpdate(commuterData){
  this.setState({
    commuterData: commuterData
  })
}

// handleUpdate(event){
//   const target = event.target
//   const attribute = target.name
//   const value = target.value
//   this.setState({[attribute]: value})
// }

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
      <div>
        <FormReact onSubmit={this.userDataUpdate.bind(this)} userData={this.state.userData} />
      </div>
      <div>
        <CommuteForm onSubmit={this.commuterDataUpdate.bind(this)} commuterData={this.state.commuterData} />
      </div>

    </div>
    );
  }
}

export default App;
