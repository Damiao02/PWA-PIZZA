import React from 'react'
import PizzaButtonMenuStyle from "./pizza-button-menu.module.css"
import {Link} from "gatsby"


export default class PizzaButtonMenu extends 
React.Component {
    
 
  render() {      
      return(
        <div className={PizzaButtonMenuStyle.menubar} onClick={this.props.click}>
              <div id="menu" className={PizzaButtonMenuStyle.menu}>
                   <div id="bar1" className={PizzaButtonMenuStyle.bar} ></div>
                   <div id="bar2" className={PizzaButtonMenuStyle.bar2} ></div>
                   <div id="bar3" className={PizzaButtonMenuStyle.bar3} ></div>

              </div>

          </div>
      );
  }
}











