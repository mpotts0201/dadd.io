import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";
import Votes from './Votes'
import styled from 'styled-components'

const Joke = styled.p`

`

const Div = styled.div`
display: flex;
flex-direction: row;

`


class HomeView extends Component {




    render() {
        return (
            <div>
                <p>{this.props.randomJoke}</p>
                <Votes />
                <Div>

                <UserList users={this.props.users} />
                <JokeList jokes={this.props.jokes} />
                </Div>
            </div>
        );
    }
}

export default HomeView;