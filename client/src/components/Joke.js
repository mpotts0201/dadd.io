import React, { Component } from "react";
import axios from "axios";
import CommentList from './CommentList'
import { Redirect } from 'react-router-dom'


class Joke extends Component {

  state = {
    joke: {
      comments: []
    },
    redirect: false,
    text: ''
  }


  componentDidMount() {
    this.getJoke()
  }

  getJoke = () => {
    const jokeId = this.props.match.params.jokeId
    console.log(jokeId)
    axios.get(`/api/jokes/${jokeId}`).then((res) => {
      const joke = res.data
      this.setState({ joke })
    })
  }

  handleChange = event => {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createNewComment(this.state.text);
  }

  createNewComment = (payload) => {
    console.log(payload)
    
    const jokeId = this.props.match.params.jokeId
    axios.post(`/api/jokes/${jokeId}/comments`, {
      text: payload
    }).then((res) => {
      this.setState({ comments: res.data.comments })
    }).catch((err) => {
      console.log(err)
    }).then(()=>{
      this.setState({text: ''})

    }).then(()=>{
      this.getJoke()

    })


  }

  deleteComment = (comment) => {
    const jokeId = this.props.match.params.jokeId
    console.log(comment)
    axios.delete(`/api/jokes/${jokeId}/comments/${comment._id}`)
    .then((res) => {
      this.setState({comments: res.data.comments})
    }).then(() => {
      this.getJoke()
    })
  }

  deleteJoke = () => {
    const jokeId = this.props.match.params.jokeId;
    this.setState({ redirect: true });

    axios
      .delete(`/api/jokes/${jokeId}`)
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.props.getJokes();
      });
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h3>{this.state.joke.text}</h3>
        <button onClick={this.deleteJoke}>Delete Joke</button>
        <CommentList comments={this.state.joke.comments} 
        deleteComment={this.deleteComment}/>
       
       
        <form onSubmit={this.handleSubmit}>
        <textarea 
        type='text'
        name='text'
        value={this.state.text}
        onChange={this.handleChange}
        />

        <button type='submit'>Create Comment</button>
        </form>

      </div>
    )
  }
}

export default Joke;
