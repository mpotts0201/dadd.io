import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Nav = styled.div`
ul{list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #07889B;
}
   ul {
       display: flex;
       flex-direction: row;
       justify-content: center;
    }
ul li a{
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-family: 'Lobster', cursive;
    font-size: 20px;
    background-color: #07889B;

}

ul li a:hover{
    background-color: #262626;
}

`




class NavBar extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <li><a href='/' onClick={this.props.populatePage}>Home</a></li>

                    <li><a href='/users/new'>Create New User</a></li>
                    <li><a href='/about'>About</a></li>

                </ul>
            </Nav>
        );
    }
}

export default NavBar;