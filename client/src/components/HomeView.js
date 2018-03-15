import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";
import Votes from './Votes'
import styled from 'styled-components'


const Signs = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
h1:hover{
    cursor: pointer;

}
h1{
    margin: 5px;
}
`


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


    approve = () =>{
        this.props.approve()
    }

    disapprove = () => {
        this.props.disapprove()
    }
    

    render() {
        return (
            <div>
                <p>{this.props.randomJoke}</p>
                <Signs>
                <h1 onClick={this.approve} >+</h1>
                <h1 onClick={this.disapprove} >-</h1>
                </Signs>
                <Div>

                <div><UserList users={this.props.users} /></div>
                <div><JokeList jokes={this.props.jokes} 
                /></div>
                </Div>
            </div>
        );
    }
}

export default HomeView;