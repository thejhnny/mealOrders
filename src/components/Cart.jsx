import React, { Component } from 'react';
import AppContext from '../AppContext.jsx';
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context =>
            context.state.cart.length === 0 ? (
              <h3>Your cart is empty! Click Order to start your order.</h3>
            ) : (
              context.state.cart.map((item, index) => (
                <div className="cart" index={index} key={index}>
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src={item.main.image_url}
                    alt=""
                  />
                  <p>
                    {item.main.name} with {item.side}
                  </p>
                  <p>Quantity - {item.amount}</p>
                  <p>Price - ${item.price}</p>
                  <button
                    onClick={() => context.state.deleteItemFromCart(index)}
                  >
                    Remove Item
                  </button>
                </div>
              ))
            )
          }
          
        </AppContext.Consumer>
        <AppContext.Consumer>
        {context => <h2>Total Cost - ${
            context.state.totalPrice
          }</h2>}
          </AppContext.Consumer>
      </div>
    );
  }
}

export default Cart;
