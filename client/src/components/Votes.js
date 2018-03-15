import React, { Component } from 'react';
import styled from 'styled-components'

const Signs = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin: 5px;
`


class Votes extends Component {
    render() {
        return (
            <Signs>
                <h1>+</h1>
                <h1>-</h1>

            </Signs>
        );
    }
}

export default Votes;