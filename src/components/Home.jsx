import React, {Component} from 'react';
import eugene from '../images/eugene.jpg';
import ig from '../images/ig.jpg';
class Home extends Component{
  render() {
    return(
      <div>
        <h1>Hi I'm Eugene and I like to cook.</h1>
        <img src="https://i.redditmedia.com/Hdlj8VTIhajl6nbd3AFfsf_ZzM9ozuE2lhgyODpONbU.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=6ae4d20af1876cb1aac4ba002a2b0582" alt=""/>
        <hr/>
        <h2>Follow me on IG!</h2>
        <a href="https://www.instagram.com/you_jean_cooks/"><img className="ig" src={ig} alt =""/></a>
      </div>
    )
  }
}

export default Home;