import React, { Component } from 'react';
import styled from 'styled-components'

const Text = styled.p`
font-family: 'Raleway', sans-serif;
color: #333333;
text-decoration: none;
margin: 20px 0;
font-size: 15px;

`

class Comment extends Component {

    deleteComment = () => {
        this.props.deleteComment(this.props.comment)
    }

    render() {
        return (
            <div>
                <Text>{this.props.comment.text}</Text>
                <button onClick={this.deleteComment}>Delete Comment</button>
            </div>
        );
    }
}

export default Comment;