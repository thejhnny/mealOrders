import React, { Component } from 'react';
import AppContext from '../AppContext.jsx';
import MainItemsList from './MainItemsList.jsx';
import SideItemsList from './SideItemsList.jsx';

class Menu extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Main Items</h2>
          <hr />
          <MainItemsList />
        </div>
        <br />
        <div>
          <h2>Side Items</h2>
          <hr />
          <SideItemsList />
        </div>
      </div>
    );
  }
}

export default Menu;
