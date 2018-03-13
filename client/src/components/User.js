import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {

    state = {
        user: {}
    }

  render() {
    const userView = this.props.users.find((user)=>{
        const userId = this.props.match.params.userId
        return user._id === userId
        this.setState({ user: userView })
    })
    return (

    <div>
        
            <h1>{userView && userView.userName}</h1>
            <p>About Me: {userView && userView.aboutMe}</p>
            <button >Update Profile</button>
        
    </div>
    )
  }
}

export default User;
