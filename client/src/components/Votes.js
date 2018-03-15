import React, { Component } from 'react';
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


class Votes extends Component {




    render() {
        return (
            <Signs>
                <h1 onClick={this.approve} >+</h1>
                <h1 onClick={this.disapprove} >-</h1>

            </Signs>
        );
    }
}

export default Votes;