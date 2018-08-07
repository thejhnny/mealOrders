import React, {Component} from 'react';
import eugene from '../images/eugene.jpg';
import ig from '../images/ig.jpg';
class Home extends Component{
  render() {
    return(
      <div>
        <h1>Hi I'm Eugene and I like to cook.</h1>
        <img src={eugene} alt=""/>
        <hr/>
        <h2>Follow me on IG!</h2>
        <a href="https://www.instagram.com/you_jean_cooks/"><img className="ig" src={ig} alt =""/></a>
      </div>
    )
  }
}

export default Home;