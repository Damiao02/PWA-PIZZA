import React from "react"
import PizzaHeaderReceitas from "../components/pizza-header-receitas"
import PizzaMenu from "../components/pizza-menu"
import PizzaBackdrop from "../components/pizza-backdrop"
import PizzaHeaderCategoria from "../components/pizza-header-categoria"
import noimage from '../img/noimage.jpg'
import serve from '../img/tray.png'
import tempo from '../img/timer.png'


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
        
        <main className="servicos">
              <article className="servico">
                  <Link to="#"><img src={noimage} alt="Pizza None" /></Link>
                  
                  <div className="inner">
                  <Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>None</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza "não adicionada" perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                 <div className="border" />

                  <div  className="testinfo">
                                 <img src={serve} alt="icone serve" />
                                    <div className="testpic" style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>0 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>0 minutos
                                    </div>
                        </div>
                 
                  </div>

              </article>

              <article className="servico">
                  <Link to="#"><img src={noimage} alt="Pizza None" /></Link>
                  
                  <div className="inner">
                  <Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>None</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza "não adicionada" perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                 <div className="border" />

                  <div  className="testinfo">
                                 <img src={serve} alt="icone serve" />
                                    <div className="testpic" style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>0 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>0 minutos
                                    </div>
                        </div>
                 
                  </div>

              </article>


              <article className="servico">
                  <Link to="#"><img src={noimage} alt="Pizza None" /></Link>
                  
                  <div className="inner">
                  <Link to="#" style={{fontFamily: "Poppins Regular", color: this.props.color}}>None</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza "não adicionada" perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                 <div className="border" />

                  <div  className="testinfo">
                                 <img src={serve} alt="icone serve" />
                                    <div className="testpic" style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>0 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>0 minutos
                                    </div>
                        </div>
                 
                  </div>

              </article>

                           
        </main>
               
      </div>
    )
  }
}
