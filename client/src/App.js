import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UserList";
import JokeList from "./components/JokeList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./components/HomeView";
import User from "./components/User";
import axios from "axios";
import NewUser from "./components/NewUser";

class App extends Component {
  state = {
    randomJoke: "",
    users: [],
    jokes: []
  };



  getJokes = () => {
    axios.get("/api/jokes").then(res => {
      const jokes = res.data;
      this.setState({ jokes });
    });
  };


  componentDidMount() {
    this.getRandomJoke();
    this.populatePage();
    this.getJokes()
  }

  populatePage = () => {
    axios
      .get("/api/users")
      .then(res => {
        const users = res.data;
        this.setState({ users: users });
      })
      .catch(err => {
        console.log(err);
      });
  };

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
    const HomeWrapper = props => {
      return (
        <HomeView
          users={this.state.users}
          randomJoke={this.state.randomJoke}
          populatePage={this.populatePage}
          {...props}
          jokes={this.state.jokes}
        />
      );
    };

    const UserWrapper = props => {
      return <User {...props} populatePage={this.populatePage} />;
    };

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={HomeWrapper} />
            <Route exact path="/users/new" component={NewUser} />
            <Route exact path="/users/:userId" render={UserWrapper} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
