import React, { Component } from 'react';
import AppContext from '../AppContext.jsx';
class Cart extends Component {
  constructor(){
    super();
    this.state = {
      cart: []
    }
  }
  componentDidMount(){
    <AppContext.Consumer>
      {context => console.log('CONTEXT HERE ', context.state.cart)}
      </AppContext.Consumer>
  }

  render() {
    return (
      <div>
        <AppContext.Consumer>
          {context =>
          (
            context.state.cart.map((item, index) => (
                <div className="item" index={index} key={index}>
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src={item.main.image_url}
                    alt=""
                  />{' '}
                  <img
                    style={{ width: '250px', height: '250px' }}
                    src={item.side.image_url}
                    alt=""
                  />
                  <p>{item.main.name} with {item.side.name}</p>
                  <button onClick={()=>context.state.editItemInCart(item)}>Edit Item</button>
                </div>

            )
              
            
            )
          )
          }
        </AppContext.Consumer>
      </div>
    );
  }
}

export default Cart;
