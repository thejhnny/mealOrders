import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import mainItems from '../data/mainItems.json';
class MainItemsList extends Component {
  render() {
    return (
      <div>
        {mainItems.map((item, index) => {
          return (
            <ListItem key={index} item={item} index={index}/>
          );
        })}
      </div>
    );
  }
}

export default MainItemsList;
