import React, { Component } from "react";
import { Link } from 'react-router-dom'

class User extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          // console.log(user.userName)
          return <Link>{user.userName}</Link>;
        })}
      </div>
    );
  }
}

export default User;
