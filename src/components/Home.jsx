import React, {Component} from 'react';
import eugene from '../eugene.jpg';
class Home extends Component{
  render() {
    return(
      <div>
        <h1>Hi I'm Eugene and I like to cook.</h1>
        <img src={eugene} alt="picture here"/>
      </div>
    )
  }
}

export default Home;