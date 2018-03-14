import React, { Component } from "react";
import axios from "axios";
import EditUser from "./EditUser";

class User extends Component {
  state = {
    user: {
        userName: '',
        aboutMe: ''
    }
  };

  componentDidMount() {
    const userId = this.props.match.params.userId;
    axios
      .get(`/api/users/${userId}`)
      .then(res => {
        const user = res.data;
        this.setState({ user: user });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateUser = event => {
    event.preventDefault();
    const userId = this.props.match.params.userId;
    const payload = {
        userName : this.state.user.userName,
        aboutMe: this.state.user.aboutMe
    }
    axios.patch(`/api/users/${userId}`, payload).then(res => {
      console.log(res.data);
      this.setState({ user: res.data });
    });
  };

  

  handleChange = (event) => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
    console.log(event.target.value)
  };

  render() {
    return (
      <div>
        <h1>{this.state.user.userName}</h1>
        <p>About Me: {this.state.user.aboutMe}</p>
        <EditUser handleSubmit={this.handleSubmit} user={this.state.user} 
        handleChange={this.handleChange}
        updateUser={this.updateUser}
        />
      </div>
    );
  }
}

export default User;
