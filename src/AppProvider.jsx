import React, { Component } from 'react';
import AppContext from './AppContext.jsx';

class AppProvider extends Component {
  state = {
    cart: [],
    pending: {main: null, side: null},
    addMainToPending: async (item)=> {
      let temp = this.state.pending;
      temp.main = item;
      await this.setState({pending: temp})
      console.log('CART HERE ', this.state.pending)
    },
    addSideToPending: async (item)=> {
      let temp = this.state.pending;
      temp.side = item;
      await this.setState({pending: temp})
      console.log('CART HERE ', this.state.pending)
    },
    addItemsToCart: async () => {
      if(!this.state.pending.main){
        alert('Choose a main dish!')
      }else if(!this.state.pending.side){
        alert('Choose a side dish')
      }else{
        await this.setState({cart: [...this.state.cart, this.state.pending]});
        console.log(this.state.cart);
        this.setState({pending: {main: null, side: null}})
        
      }
    }
  }

  render() {
    return <AppContext.Provider value={{state: this.state}}>{this.props.children}</AppContext.Provider>;
  }
}

export default AppProvider;