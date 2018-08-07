import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="item">
              <img
                style={{ width: '250px', height: '250px' }}
                src={this.props.item.image_url}
                alt=""
              />
              <p>
                {this.props.item.name} - ${this.props.item.price}
              </p>
            </div>
    )
  }
}

export default ListItem;