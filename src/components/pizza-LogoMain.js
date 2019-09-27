import React from "react"
import PizzaLogoMainStyle from "./pizza-LogoMain.module.css"
import {Link} from "gatsby"
import logo from '../img/Logo.png';



export default class PizzaLogoMain extends 
React.Component {
    
 
  render() {      
      return(
        
              <div className={PizzaLogoMainStyle.LogoMain}>
                        <img src={logo} alt="logo no Meio" />
                        <p style={{fontFamily: "Poppins Light", color: this.props.color}}>Em casa, todos os <span style={{fontFamily: "Poppins Bold", color: this.props.color}}>caminhos</span> levam à <span style={{fontFamily: "Poppins Bold", color: this.props.color}}>cozinha.</span></p>
              </div>
        
      );
  }
}
//12:38