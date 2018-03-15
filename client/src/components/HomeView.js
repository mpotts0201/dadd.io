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
div:first-child {
    border: 3px solid black;
}
`


class HomeView extends Component {




    render() {
        return (
            <div>
                <p>{this.props.randomJoke}</p>
                <Votes />
                <Div>

                <div><UserList users={this.props.users} /></div>
                <div><JokeList jokes={this.props.jokes} 
                approve={this.props.approve}
                disapprove={this.props.disapprove}
                /></div>
                </Div>
            </div>
        );
    }
}

export default HomeView;