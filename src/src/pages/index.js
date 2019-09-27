import React from "react"
import PizzaHeader from "../components/pizza-header"
import PizzaMenu from "../components/pizza-menu"
import PizzaBackdrop from "../components/pizza-backdrop"


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
        <PizzaHeader SideMenu={this.SideMenu}/>
        {sideDrawer}
        {backdrop}       
        
               
      </div>
    )
  }
}
