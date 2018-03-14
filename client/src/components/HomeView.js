import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";
import { Link } from 'react-router-dom'
import Votes from './Votes'

class HomeView extends Component {




    render() {
        return (
            <div>
                <p>{this.props.randomJoke}</p>
                <Votes />
                <UserList users={this.props.users} />
                <Link to='/users/new'>Create New User</Link>
                <JokeList jokes={this.props.jokes} />
            </div>
        );
    }
}

export default HomeView;