import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainItemsList from './components/MainItemsList.jsx';
import SideItemsList from './components/SideItemsList.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">You Jean Cooks</h1>
        </header>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/mainitems">Main Items</Link>
              </li>
              <li>
                <Link to="/sideitems">Side Items</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/mainitems" component={MainItemsList} />
            <Route path="/sideitems" component={SideItemsList} />
            <Route path="/cart" component={Cart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
