import React, { Component } from 'react';
import logo from './images/logo.jpeg';
import './App.css';
import Menu from './components/Menu.jsx';
import Cart from './components/Cart.jsx';
import Home from './components/Home.jsx';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import AppProvider from './AppProvider.jsx';
import AppContext from './AppContext.jsx';
class App extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <AppProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">You Jean Cooks</h1>
          </header>
          <HashRouter>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Menu">Menu</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
              {/* <hr /> */}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/menu" component={Menu} />
                <Route path="/cart" component={Cart} />
              </Switch>
            </div>
          </HashRouter>
        </div>
      </AppProvider>
    );
  }
}

export default App;
