import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class NewUser extends Component {
  state = {
    redirectToUser: ""
  };

  createNewUser = payload => {
    axios.post(`/api/users`, payload).then(res => {
    console.log(res.data)
      const newUserId = res.data._id
      this.setState({ redirectToUser: newUserId })
        
    
    }).catch((err)=>{
        console.log(err)
    })
  };

  handleChange = event => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createNewUser(this.state);
  };

  render() {
    if (this.state.redirectToUser){
        return <Redirect to={`/users/${this.state.redirectToUser}`}/>
    }
    return (
      <div>
        <h1>Create New User</h1>
        <form onSubmit={this.handleSubmit} >
        <label htmlFor="userName">User Name: </label>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor='aboutMe'>About Me: </label>
        <input 
            type='text'
            name='aboutMe'
            value={this.state.aboutMe}
            onChange={this.handleChange}
        />
        <button type='submit'>Create New User</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
