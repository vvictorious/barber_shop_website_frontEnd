import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import './Home.css'


class App extends Component {
  render() {
    return (
      <div className="document">
        <div className="nav">
          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />
          <div class="menu">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <a href="#"><span>Book online</span></a>
      </div>
        </div>
        <Home />

      </div>
    );
  }
}

export default App;
