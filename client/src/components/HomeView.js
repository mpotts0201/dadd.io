import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";

class HomeView extends Component {

    


    render() {
        return (
            <div>
                <p>{this.props.randomJoke}</p>
                <UserList users={this.props.users} />
                <JokeList/>
            </div>
        );
    }
}

export default HomeView;