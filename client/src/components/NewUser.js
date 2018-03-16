import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Text = styled.label`
font-family: 'Raleway', sans-serif;
color: #333333;
text-decoration: none;
margin: 20px 0;
font-size: 20px;

`

const H1 = styled.h1`
font-family: 'Lobster', cursive;
font-size: 35px;
color: #0d0d0d;
`

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
        <H1>Create New User</H1>
        <form onSubmit={this.handleSubmit} >
        <Text htmlFor="userName">User Name </Text>
        <br/>
        <input
          type="text"
          name="userName"
          value={this.state.userName}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <Text htmlFor='aboutMe'>About Me </Text>
        <br/>
        <textarea 
            rows='10'
            cols='70'
            type='text'
            name='aboutMe'
            value={this.state.aboutMe}
            onChange={this.handleChange}
        />
        <br/>
        <br/>
        <button type='submit'>Create New User</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
