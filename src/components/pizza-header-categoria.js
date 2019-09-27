import React from "react"
import PizzaHeaderCategoriaStyle from "./pizza-header-categoria.module.css"
import {Link} from "gatsby"
import logo from '../img/Logo.png';



export default class PizzaHeaderCategoria extends 
React.Component {
    
 
  render() {      
      return(
        <header className={PizzaHeaderCategoriaStyle.header}>
              <div className={PizzaHeaderCategoriaStyle.main}>
                   <ul>
                     <li><Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>SALGADAS</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>DOCES</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>VEGETARIANA</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>GOURMET</Link></li>
                   </ul>
              </div>
             
        </header>
      );
  }
}
