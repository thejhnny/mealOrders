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
    },
    addSideToPending: async (item)=> {
      let temp = this.state.pending;
      temp.side = item;
      await this.setState({pending: temp})
    },
    addItemsToCart: async () => {
      if(!this.state.pending.main){
        alert('Choose a main dish!')
      }else if(!this.state.pending.side){
        alert('Choose a side dish')
      }else{
        await this.setState({cart: [...this.state.cart, this.state.pending]});
        this.setState({pending: {main: null, side: null}})
        
      }
    },
    editItemInCart: async (item) => {
      console.log('reaches here')
      await this.setState({pending: {
        main: item.main,
        side: item.side
      }})
    }
  }

  render() {
    return <AppContext.Provider value={{state: this.state}}>{this.props.children}</AppContext.Provider>;
  }
}

export default AppProvider;