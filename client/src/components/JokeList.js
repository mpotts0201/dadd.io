import React, { Component } from 'react';
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
                            <br />
                            <a href={`/jokes/${joke._id}`}>{joke.text}</a>
                            <br />
                    
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default JokeList;