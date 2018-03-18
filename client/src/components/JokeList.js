import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const H1 = styled.h1`
font-family: 'Lobster', cursive;
font-size: 35px;
color:  #07889B;
`

const Text = styled.a`
font-family: 'Raleway', sans-serif;
color: #333333;
text-decoration: none;
margin: 30px 0;
:hover{
  color: #1c7fb0;
}
`

const Div = styled.div`
padding: 15px;
margin: 10px;

`

class JokeList extends Component {


    render() {
        return (
            <div>
                <H1>Saved Jokes</H1>
                {this.props.jokes.map(joke => {
                    return (
                        <Div>
                            <br />
                            <Text href={`/jokes/${joke._id}`}>{joke.text}</Text>
                            <br />
                    
                        </Div>
                    )
                })}
            </div>
        );
    }
}

export default JokeList;