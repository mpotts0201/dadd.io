import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div>
                {this.props.comments
                    ?this.props.comments[0].map((comment) => {
                        return (
                            <div>
                                <h4>{comment.text}</h4>
                            </div>
                        )
                    })
                : null}

                  
            </div>
        );
    }
}

export default Comment;