import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    user: {}
  };

//make axios call instead of props 

  render() {
    const user = this.props.users.find(user => {
        const userId = this.props.match.params.userId;
        return user._id === userId;
      });
    return (
      <div>
        <h1>{user && user.userName}</h1>
        <p>About Me: {user && user.aboutMe}</p>
        <button>Update Profile</button>
      </div>
    );
  }
}

export default User;
