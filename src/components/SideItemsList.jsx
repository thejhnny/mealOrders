import React, { Component } from 'react';
import ListItem from './ListItem.jsx';
import sideItems from '../data/sideItems.json';
class SideItemsList extends Component {
  render() {
    return (
      <div>
        {sideItems.map((item, index) => {
          return (
            <ListItem key={index} item={item} index={index}/>
          );
        })}
      </div>
    );
  }
}

export default SideItemsList;
