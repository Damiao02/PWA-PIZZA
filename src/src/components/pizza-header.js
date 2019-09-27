import React from "react"
import PizzaHeaderStyle from "./pizza-header.module.css"
import PizzaButtonMenu from "../components/pizza-button-menu"
import PizzaLogoMain from "../components/pizza-LogoMain"
import {Link} from "gatsby"
import logo from '../img/Logo.png';



export default class PizzaHeader extends 
React.Component {
    
 
  render() {      
      return(
        <header className={PizzaHeaderStyle.header}>
              <div className={PizzaHeaderStyle.main}>
              <div>
                    <PizzaButtonMenu click={this.props.SideMenu}/>
              </div>
                  <div className={PizzaHeaderStyle.logo}>
                  <Link to="/"><img src={logo} alt="logo" /></Link>
                     
                  </div>
                  
                   <ul>
                     <li><Link to="/" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Home</Link></li>
                     <li><Link to="/receitas" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Receitas</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Adicionar Receita</Link></li>
                     <li><Link to="#" style={{fontFamily: "Poppins Bold", color: this.props.color}}>Sobre</Link></li>
                   </ul>
              </div>
              <div>
                    <PizzaLogoMain/>     
              </div>
        </header>
      );
  }
}
//12:38