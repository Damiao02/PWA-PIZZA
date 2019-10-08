import React from "react"
import PizzaHeaderReceitas from "../components/pizza-header-receitas"
import PizzaMenu from "../components/pizza-menu"
import PizzaBackdrop from "../components/pizza-backdrop"
import PizzaHeaderCategoria from "../components/pizza-header-categoria"
import banana from '../img/pizza-banana.jpg'
import noimage from '../img/noimage.jpg'
import chocolate from '../img/pizza-chocolate.jpg'
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
                  <Link to="/doces/pizza-banana"><img src={banana} alt="Pizza Marguerita" /></Link>
                  
                  <div className="inner">
                  <Link to="/doces/pizza-banana" style={{fontFamily: "Poppins Regular", color: this.props.color}}>Pizza de Banana</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza de banana perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                 <div className="border" />

                  <div  className="testinfo">
                                 <img src={serve} alt="icone serve" />
                                    <div className="testpic" style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>4 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>60 minutos
                                    </div>
                        </div>
                 
                  </div>

              </article>

              <article className="servico">
                  <Link to="/doces/pizza-chocolate-morango"><img src={chocolate} alt="Pizza Presunto e Queijo" /></Link>
                  
                  <div className="inner">
                  <Link to="/doces/pizza-chocolate-morango" style={{fontFamily: "Poppins Regular", color: this.props.color}}>Pizza de Chocolate com Morango</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza de chocolate com morango perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                    <div className="border" />

                <div  className="testinfo">
                                 <img src={serve} alt="icone serve" />
                                    <div className="testpic" style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>8 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>35 minutos
                                    </div>
                        </div>
                  </div>
              </article>

              <article className="servico">
                  <Link to="/doces/pizza-doce-leite-frigideira"><img src={noimage} alt="Pizza Frango" /></Link>
                  
                  <div className="inner">
                  <Link to="/doces/pizza-doce-leite-frigideira" style={{fontFamily: "Poppins Regular", color: this.props.color}}>Pizza de Doce de Leite de Frigideira</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza de doce de leite de frigideira perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                <div className="border" />

                <div  className="testinfo">
                                 <img src={serve} alt="icone serve" />
                                    <div className="testpic" style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>4 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>20 minutos
                                    </div>
                        </div>
                  </div>
              </article>
                           
        </main>
               
      </div>
    )
  }
}
