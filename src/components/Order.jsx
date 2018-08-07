import React, { Component } from 'react';
import AppContext from '../AppContext.jsx';
import mainItems from '../data/mainItems.json';
import sideItems from '../data/sideItems.json';

class Order extends Component {
  constructor(){
    super();
    this.state ={
      sidePrices: {
        'White Rice' : 1.00,
        'Brown Rice' : 1.50,
        'Quinoa' : 2.00,
        'Sweet Potatoes': 2.25,
        'Roasted Vegetables': 2.50
      }
    }
  }
  render() {
    return (
      <div>
        {mainItems.map((item, index) => {
          return (
            <div className="order" key={index}>
              <img
                style={{ width: '250px', height: '250px' }}
                src={item.image_url}
                alt=""
              />
              <p style={{ textAlign: 'center' }}>
                {item.name} - {item.price}
              </p>
              <br />
              Choose a side{' '}
              <select id={`side${index}`}>
                {sideItems.map((side, i) => {
                  return (
                    <option key={i} value={side.name}>
                      {side.name} - {side.price}
                    </option>
                  );
                })}
              </select>
              <br />
              How many orders?{' '}
              <input id={`amount${index}`} type="number" name="quantity" />
              <br />
              <AppContext.Consumer>
                {context => (
                  <button
                    onClick={() => {
                      context.state.addItemsToCart(
                        item,
                        item.price,
                        document.getElementById(`side${index}`).value,
                        this.state.sidePrices[document.getElementById(`side${index}`).value],
                        document.getElementById(`amount${index}`).value
                      );
                      document.getElementById(`side${index}`).value =
                        'White Rice';
                      document.getElementById(`amount${index}`).value = '';
                    }}
                  >
                    Add to cart
                  </button>
                )}
              </AppContext.Consumer>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Order;
