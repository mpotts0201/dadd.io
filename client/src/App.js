import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import UserList from './components/UserList'
import JokeList from './components/JokeList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  state = {
    randomJoke: ''
  }

  getRandomJoke = () => {
    axios.get('/api/jokes')
    .then((res) => {
      const randomJoke = res.data
      const joke = randomJoke[Math.floor(Math.random()*randomJoke.length)]

      this.setState({ randomJoke: joke.text})
      console.log(this.state.randomJoke)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  
  componentDidMount(){
    this.getRandomJoke()
  }




  render() {


    return (
      <Router>
      <div className="App">
        <p>{this.state.randomJoke}</p>
      <Switch>
        <UserList/>
        <JokeList/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
