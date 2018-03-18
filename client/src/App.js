import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UserList";
import JokeList from "./components/JokeList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeView from "./components/HomeView";
import User from "./components/User";
import axios from "axios";
import NewUser from "./components/NewUser";
import NavBar from './components/NavBar'
import Joke from './components/Joke'
import About from './components/About'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Lobster|Raleway');
`
const H1 = styled.h1`
font-family: 'Lobster', cursive;
font-size: 50px;
color:  #07889B;
`



const H6 = styled.h6`
font-family: 'Raleway', sans-serif;
color: #595959;
font-weight: 700;
font-style: italic;
`

class App extends Component {
  state = {
    randomJoke: "",
    users: [],
    jokes: []
  };

  disapprove = () => {
    this.getRandomJoke()
  }



  approve = () => {
    const payload = {
      text: this.state.randomJoke,
      votes: 1
    }
    axios.post('/api/jokes', payload)
    this.getJokes()
    this.getRandomJoke()
    console.log(payload.text)
  }

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
      ({
        url: 'https://icanhazdadjoke.com/',
        method: 'get',
        headers: {
          'User-Agent': 'My App (https://github.com/mpotts0201/dadd.io)',
          'Accept': 'application/json',
        },
    })
      .then(res => {
        const joke = res.data.joke;

        this.setState({ randomJoke: joke });
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
          approve={this.approve}
          disapprove={this.disapprove}
          voteUp={this.voteUp}
          voteDown={this.voteDown}
        />
      );
    };

    const UserWrapper = props => {
      return <User {...props} populatePage={this.populatePage} />;
    };

    const JokeWrapper = (props) => {
      return <Joke {...props} getJokes={this.getJokes} />
    }

    return (
      <Router>
        <div className="App">

          <NavBar populatePage={this.populatePage} />
          
            <H1>dadd.io</H1>
            <H6>your favorite dad jokes, at the press of a button</H6>
          
          <Switch>
            <Route exact path="/" render={HomeWrapper} />
            <Route exact path="/users/new" component={NewUser} />
            <Route exact path="/users/:userId" render={UserWrapper} />
            <Route exact path='/jokes/:jokeId' render={JokeWrapper} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
