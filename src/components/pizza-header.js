import React from "react"
import PizzaHeaderStyle from "./pizza-header.module.css"
import {Link} from "gatsby"




export default class PizzaHeader extends 
React.Component {
    
 
  render() {      
      return(
        <header className={PizzaHeaderStyle.header}>
              <div className={PizzaHeaderStyle.main}>
                  <div className={PizzaHeaderStyle.logo}>
                       
                  </div>
                   <ul>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Home</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Receitas</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Adicionar Receita</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Sobre</Link></li>
                   </ul>
              </div>
        </header>
      );
  }
}
//12:38