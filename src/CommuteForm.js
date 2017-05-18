import React, { Component } from 'react';

class CommuteForm extends Component {
  constructor(props){
  super(props)
    this.state = props.commuterData
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
              <label>Transportation:</label>
              <br />
              <select
                name='transportation'
                value={this.state.transportation}
                onChange={this.handleChange.bind(this)}
              >
              <option></option>
              <option value='Bus'>Bus</option>
              <option value='Car'>Car</option>
            </select>
              <br />
              <label>Commute Time:</label>
              <br />
              <input
                name='time'
                type='number'
                value={this.state.time}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <label>Favorite Drink:</label>
              <br />
              <input
                name='beverage'
                type='text'
                value={this.state.beverage}
                onChange={this.handleChange.bind(this)}
              />
              <br />
              <input type='submit' value='Submit' />
            </form>

      </div>
    );
  }
  }
export default CommuteForm;
