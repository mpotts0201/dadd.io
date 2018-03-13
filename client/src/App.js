import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UserList";
import JokeList from "./components/JokeList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./components/HomeView";
import User from './components/User'
import axios from 'axios'


class App extends Component {
  
  state = {
    randomJoke: "",
    users: []
  };

  componentDidMount() {
    this.getRandomJoke();

    axios
      .get("/api/users")
      .then(res => {
        const users = res.data;
        console.log(users);
        this.setState({ users: users });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getRandomJoke = () => {
    axios
      .get("/api/jokes")
      .then(res => {
        const randomJoke = res.data;
        const joke = randomJoke[Math.floor(Math.random() * randomJoke.length)];

        this.setState({ randomJoke: joke.text });
        console.log(this.state.randomJoke);
      })
      .catch(err => {
        console.log(err);
      });
  };


  render() {

    const HomeWrapper = (props) => {
      return <HomeView users={this.state.users} 
      randomJoke={this.state.randomJoke} 
      {...props}/>
    }

    const UserWrapper = (props) => {
      return <User users={this.state.users}
      {...props}
      />
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={HomeWrapper} />
            <Route exact path='/users/:userId' render={UserWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
