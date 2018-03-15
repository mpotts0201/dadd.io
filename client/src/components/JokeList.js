import React, { Component } from 'react';
import Joke from './Joke'
import styled from 'styled-components'
import axios from 'axios'





class JokeList extends Component {


    render() {
        return (
            <div>
                <h1>Saved Jokes</h1>
                {this.props.jokes.map(joke => {
                    return (
                        <div>
                            <h5>{joke.text}</h5>
                            
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default JokeList;