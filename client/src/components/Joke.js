import React, { Component } from "react";
import axios from "axios";
import Comment from './Comment'
class Joke extends Component {

  state = {
    joke: {
      comments: []
    }
  }

  
  componentDidMount(){
    const jokeId = this.props.match.params.jokeId
    console.log(jokeId)
    axios.get(`/api/jokes/${jokeId}`).then((res) => {
      const joke = res.data
      this.setState({joke})
    })
  }

  render() {
    return(
      <div>
        <h3>{this.state.joke.text}</h3>
        <Comment comments={this.state.joke.comments}/>


      </div>
    )
  }
}

export default Joke;
