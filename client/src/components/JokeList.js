import React, { Component } from 'react';
import Joke from './Joke'
import Votes from './Votes'
import styled from 'styled-components'


const Score = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`



class JokeList extends Component {


    approve = () => {
        
    }



    render() {
        return (
            <div>
                <h1>Saved Jokes</h1>
                {this.props.jokes.map(joke => {
                    return (
                        <div>
                            <h5>{joke.text}</h5>
                            <Score>

                            <p>Score: {joke.votes}</p>
                            <Votes />

                            </Score>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default JokeList;