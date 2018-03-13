import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";
import { Link } from 'react-router-dom'

class HomeView extends Component {

    


    render() {
        return (
            <div>
                <p>{this.props.randomJoke}</p>
                <UserList users={this.props.users} />
                <Link to='/users/new'>Create New User</Link>
                <JokeList/>
            </div>
        );
    }
}

export default HomeView;