import React, {Component} from 'react';
import AppContext from '../AppContext.jsx';
class Cart extends Component{
  render() {
    return(
      <div>
        <AppContext.Consumer>
          {(context) => 
          (
            context.state.cart.map((item, index) => {
              return (
                <div className = "item" index={index} key={index}>
                  <img src={item.main.image_url} alt=""/> <img src={item.side.image_url} alt=""/>
                 
                </div>
              )
            })
          )
          }
        </AppContext.Consumer>
      </div>
    )
  }
}

export default Cart;