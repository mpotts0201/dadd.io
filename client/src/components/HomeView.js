import React, { Component } from 'react';
import axios from 'axios'
import UserList from "./UserList";
import JokeList from "./JokeList";
import styled from 'styled-components'


const Text = styled.p`
font-family: 'Raleway', sans-serif;
color: #333333;
text-decoration: none;
margin: 20px 0;
font-size: 25px;

`

const Signs = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

h1{
    padding: 30px;
}
h1:hover{
    cursor: pointer;

}
h1{
    margin: 5px;
}
`

const H1 = styled.h1`
font-family: 'Lobster', cursive;
color:  #07889B;
font-size: 30px;
:hover{
  color: #262626;
}
`

const Div = styled.div`
margin: 30px;
display: flex;
flex-direction: row;
justify-content: space-around;

@media(max-width: 700px){
    flex-direction: column-reverse;
    .user{
        max-width: none;
    }
    .joke{
        max-width: none;
    }


}
`
const UserDiv = styled.div`
padding: 0 20px;
max-width: 300px;

`
const JokeDiv = styled.div`
padding: 0 20px;
`

const Line = styled.div`
border: 1px solid #595959;
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
                <Text>{this.props.randomJoke}</Text>
                <Signs>
                <H1 onClick={this.approve} >Save Joke</H1>
                <H1 onClick={this.disapprove} >New Joke</H1>
                </Signs>
                <Div>

                <UserDiv className='user'><UserList users={this.props.users} /></UserDiv>
                <br/>
                <Line />
                <JokeDiv className='joke'><JokeList jokes={this.props.jokes} 
                voteUp={this.props.voteUp}
                voteDown={this.props.voteDown}
                /></JokeDiv>
                </Div>
            </div>
        );
    }
}

export default HomeView;