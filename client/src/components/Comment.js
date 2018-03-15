import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.comments
                    ?this.props.comments.map((comment) => {
                        return (
                            <div>
                                <p>{comment.text}</p>
                            </div>
                        )
                    })
                : null}

                  
            </div>
        );
    }
}

export default Comment;