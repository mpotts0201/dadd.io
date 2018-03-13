import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    randomJoke: {}
  }

  componentDidMount(){
    axios.get('/api/jokes')
    .then((res) => {
      const randomJoke = res.data
      this.setState({ randomJoke: randomJoke})
      console.log(randomJoke)
    })
    .catch((err)=>{
      console.log(err)
    })
  }



  render() {
    return (
      <div className="App">
        <p></p>
      </div>
    );
  }
}

export default App;
