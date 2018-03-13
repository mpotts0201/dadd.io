import React, { Component } from "react";
import { Link } from 'react-router-dom'

class UserList extends Component {


  render() {
    return (
      <div>
        {this.props.users.map(user => {
          // console.log(user.userName)

          return (
            <div>
              <Link to={`/users/${user._id}`}>{user.userName}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserList;
