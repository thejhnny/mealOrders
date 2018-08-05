import React, { Component } from 'react';
import AppContext from '../AppContext.jsx';
class SideItemsList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          name: 'White Rice',
          image_url:
            'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18195811/fc31tc016-03-main.jpg',
          price: '$1.00'
        },
        {
          name: 'Brown Rice',
          image_url:
            'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e2/guid/Fool-Proof-Oven-Baked-Brown-Rice/47086d22-f9e0-45f3-95c6-bbebe86e8494.jpg',
          price: '$1.50'
        },
        {
          name: 'Quinoa',
          image_url:
            'https://atmedia.imgix.net/a8b86bbaba6253b37997ebc5861e8171efbfde65?w=800&fit=max',
          price: '$2.00'
        },
        {
          name: 'Sweet Potatoes',
          image_url:
            'https://lchaimfoods.com/wp-content/uploads/2016/03/candied-yams-horiz-a-1600.jpg',
          price: '$2.25'
        },
        {
          name: 'Roasted Vegetables',
          image_url:
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/9/8/0/rstveg_383_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383169436621.jpeg',
          price: '$2.50'
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
              <img
                style={{ width: '250px', height: '250px' }}
                src={item.image_url}
                alt=""
              />
              <p>
                {item.name} - {item.price}
              </p>
              <AppContext.Consumer>
                {context => (
                  <div>
                    <button
                      onClick={() => {
                        context.state.addSideToPending(item);
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
          );
        })}
      </div>
    );
  }
}

export default SideItemsList;
