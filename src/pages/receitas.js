import React from "react"
import PizzaHeaderReceitas from "../components/pizza-header-receitas"
import PizzaMenu from "../components/pizza-menu"
import PizzaBackdrop from "../components/pizza-backdrop"
import PizzaHeaderCategoria from "../components/pizza-header-categoria"
import PizzaMain from "../components/pizza-main"
import PizzaCards from "../components/pizza-cards"


import {Link} from "gatsby"
import { Transform } from "stream";

export default class Index extends React.Component {

  state = {
    sideDrawerOpen: false
  };

  SideMenu = () =>{
    this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });

  };

  BackMenu = () =>{
     this.setState({sideDrawerOpen: false});
  };


  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen){
      sideDrawer = <PizzaMenu/>;
      backdrop = <PizzaBackdrop click={this.BackMenu}/>;
    }
    return (
      <div>
        <PizzaHeaderReceitas SideMenu={this.SideMenu}/>
        {sideDrawer}
        {backdrop}       
        <PizzaHeaderCategoria/>
        
        <PizzaCards/>
               
      </div>
    )
  }
}
