import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const H1 = styled.h1`
font-family: 'Lobster', cursive;
font-size: 35px;
color:  #07889B;
`

const Text = styled.a`
font-family: 'Raleway', sans-serif;
color: #333333;
text-decoration: none;
margin: 20px 0;
:hover{
  color: #1c7fb0;
}
`

class UserList extends Component {


  

  render() {
    return (
      <span>
        <H1>Users</H1>
        {this.props.users.map(user => {
          // console.log(user.userName)

          return (
            <div>
              <Text href={`/users/${user._id}`}>{user.userName}</Text>
            </div>
          );
        })}
      </span>
    );
  }
}

export default UserList;
