import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <Route exact path="/" component={ Fib } />
          <Route path="/otherpage" component={ OtherPage } />
        </div>
      </Router>
    )
  }
}

export default App;
