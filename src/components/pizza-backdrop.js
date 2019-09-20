import React from 'react'
import PizzaBackdropStyle from "./pizza-backdrop.module.css"
import {Link} from "gatsby"


export default class PizzaBackdrop extends 
React.Component {
    
 
  render() {      
      return(
        <div className={PizzaBackdropStyle.backdrop} onClick={this.props.click}/>
               
  
         
      );
  }
}