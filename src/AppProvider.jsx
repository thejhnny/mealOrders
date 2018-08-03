import React, { Component } from 'react';
import AppContext from './AppContext.jsx';

class AppProvider extends Component {
  state = {
    cart: [],
    addToCart: (item)=> {
      this.setState({cart: [...this.state.cart, item]})
      console.log('CART HERE ', this.state.cart)
    }
  }

  render() {
    return <AppContext.Provider value={{state: this.state}}>{this.props.children}</AppContext.Provider>;
  }
}

export default AppProvider;