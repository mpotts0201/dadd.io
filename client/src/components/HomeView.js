import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";
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

const Div = styled.div`

display: flex;
flex-direction: row;
width: 75%;
justify-content: center;
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
                voteUp={this.props.voteUp}
                voteDown={this.props.voteDown}
                /></div>
                </Div>
            </div>
        );
    }
}

export default HomeView;