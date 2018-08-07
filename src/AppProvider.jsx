import React, { Component } from 'react';
import AppContext from './AppContext.jsx';

class AppProvider extends Component {
  state = {
    cart: [],
    totalPrice: 0,
    addItemsToCart: async (main, mainPrice, side, sidePrice, amount) => {
      await this.setState({
        cart: [
          ...this.state.cart,
          {
            main: main,
            side: side,
            amount: amount,
            price: (Number(mainPrice) +Number(sidePrice))*Number(amount)
          }
        ],
        totalPrice: this.state.totalPrice + (Number(mainPrice) +Number(sidePrice))*Number(amount)
      });
    },
    deleteItemFromCart:  async (index) => {
      let temp = this.state.cart;
      let tempPrice = this.state.cart[index].price;
      temp.splice(index, 1);
      await this.setState({cart: temp,
        totalPrice: this.state.totalPrice - tempPrice
      });
      console.log('CART AFTER DELETING ', this.state.cart)
    }
  };

  render() {
    return (
      <AppContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
