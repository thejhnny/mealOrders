import React, {Component} from 'react';
import AppContext from '../AppContext.jsx';
class SideItemsList extends Component{
  constructor() {
    super();
    this.state = {
      items: [
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        },
        {
          image_url: 'http://dummyimage.com/250x250.jpg/5fa2dd/ffffff'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.items.map((item, index) => {
          return (
            <div className="item" index={index} key={index}>
              <img src={item.image_url} alt="" />
              <p>
                Side Item {index + 1} - Price {index + 1}
              </p>
              <AppContext.Consumer>
              {(context) => 
                <div>
                <button onClick={() => {context.state.addSideToPending(item)} }>ADD TO CART</button>
                <button onClick={context.state.addItemsToCart}>Add to Cart</button>
                </div>
                }
              </AppContext.Consumer>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SideItemsList;