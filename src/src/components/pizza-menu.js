import React from 'react'
import PizzaMenuStyle from "./pizza-menu.module.css"
import {Link} from "gatsby"


export default class PizzaMenu extends 
React.Component {
    
 
  render() {      
      return(
        <nav className={PizzaMenuStyle.menuSide} >
              <div className={PizzaMenuStyle.menuClose}>
              <div className={PizzaMenuStyle.menuBack}>
                   <div  className={PizzaMenuStyle.close1} ></div>
                   <div className={PizzaMenuStyle.close2} ></div>

              </div>

          </div>
             <ul>
              <span><h2 style={{fontFamily: "Poppins Bold", color: this.props.color}}>Menu</h2></span>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Home</Link></li>
                     <li><Link to="/receitas" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Receitas</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Adicionar Receita</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Sobre</Link></li>
             </ul>
        </nav>
      );
  }
}