import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Nav = styled.div`
ul{list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}
   ul li{
        float: right;
    }
ul li a{
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

ul li a:hover{
    background-color: #111;
}

`




class NavBar extends Component {
    render() {
        return (
            <Nav>
                <ul>
                    <li><a href='/users/new'>Create New User</a></li>
                    <li><a href='/'>Comments</a></li>
                    <li><a href='/'>Home</a></li>



                </ul>
            </Nav>
        );
    }
}

export default NavBar;