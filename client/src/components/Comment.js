import React, { Component } from 'react';

class Comment extends Component {

    deleteComment = () => {
        this.props.deleteComment(this.props.comment)
    }

    render() {
        return (
            <div>
                <p>{this.props.comment.text}</p>
                <button onClick={this.deleteComment}>Delete Comment</button>
            </div>
        );
    }
}

export default Comment;