import React, { Component } from 'react';
import Comment from './Comment'


class CommentList extends Component {


    

    render() {
        return (
            <div>
                {this.props.comments
                    ?this.props.comments.map((comment) => {
                        return (
                            <div>
                                <Comment 
                                    deleteComment={this.props.deleteComment}
                                    comment={comment}
                                />
                            </div>
                        )
                    })
                : null}

                  
            </div>
        );
    }
}

export default CommentList;