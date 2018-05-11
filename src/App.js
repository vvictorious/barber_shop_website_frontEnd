import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home.js';
import Services from './Pages/Services.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route  path="/services" component={Services} />
        </div>
      </Router>
        
    );
  }
}

export default App;
