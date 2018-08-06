import React, { Component } from 'react';
import AppContext from '../AppContext.jsx';

class ListItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="item">
              <img
                style={{ width: '250px', height: '250px' }}
                src={this.props.item.image_url}
                alt=""
              />
              <p>
                {this.props.item.name} - {this.props.item.price}
              </p>
              <AppContext.Consumer>
                {context => (
                  <div>
                    <button
                      onClick={() => {
                        context.state.addSideToPending(this.props.item);
                      }}
                    >
                      ADD TO ORDER
                    </button>
                    <button onClick={context.state.addItemsToCart}>
                      Add to Cart
                    </button>
                  </div>
                )}
              </AppContext.Consumer>
            </div>
    )
  }
}

export default ListItem;