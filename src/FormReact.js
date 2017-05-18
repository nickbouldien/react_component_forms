import React, { Component } from 'react';

class FormReact extends Component {
  constructor(props){
  super(props)
    this.state = props.userData
  }

  handleChange(event){
    const target = event.target
    const attribute = target.name
    this.setState({[attribute]: event.target.value}, () =>
    console.log(this.state))
  }
  //
  handleSubmit(event){
    //console.log('handle submit function');
    this.props.onSubmit(this.state)
    event.preventDefault()
  }

  capitalize(name){
    //let result;
    if (name.length ===0){
      return ""
    } else {
    return name[0].toUpperCase() + name.slice(1);
    }
  }

  render() {

    // console.log(this.state);
    // let name = this.state.firstName;
    // console.log(name);
    // //let result
    // let result = name[0].toUpperCase() + name.slice(1);


    return (
      <div>
        {/* handleSubmit or submitForm ??? */}
        <form onSubmit={this.handleSubmit.bind(this)} >
              <h3>Text Input</h3>
              <br />
              <label>First Name:</label>
              <br />
              <input
                name='firstName'
                type='text'
                value={this.capitalize(this.state.firstName)}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <label>Last Name:</label>
              <br />
              <input
                name='lastName'
                type='text'
                value={this.capitalize(this.state.lastName)}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <label>Email Address:</label>
              <br />
              <input
                name='email'
                type='text'
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <input type='submit' value='Submit' />
            </form>

      </div>
    );
  }
}

export default FormReact;
