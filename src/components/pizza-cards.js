import React from "react"
import PizzaCardsStyle from "./pizza-cards.module.css"
import {Link} from "gatsby"
import marguerita from '../img/pizza-marguerita.jpg'
import frango from '../img/pizza-frango.jpg'
import presunto_queijo from '../img/pizza-presunto-queijo.jpg'
import serve from '../img/tray.png'
import tempo from '../img/timer.png'



export default class PizzaCards extends 
React.Component {
    
 
  render() {      
      return(
        <main className={PizzaCardsStyle.servicos}>
              <article className={PizzaCardsStyle.servico}>
                  <Link to="/salgadas/pizza-marguerita"><img src={marguerita} alt="Pizza Marguerita" /></Link>
                  
                  <div className={PizzaCardsStyle.inner}>
                  <Link to="/salgadas/pizza-marguerita" style={{fontFamily: "Poppins Regular", color: this.props.color}}>Pizza Marguerita</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza de marguerita perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                 <div className={PizzaCardsStyle.border} />

                  <div  className={PizzaCardsStyle.testinfo}>
                                 <img src={serve} alt="icone serve" />
                                    <div className={PizzaCardsStyle.testpic} style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>6 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>30 minutos
                                    </div>
                        </div>
                 
                  </div>

              </article>

              <article className={PizzaCardsStyle.servico}>
                  <Link to="/salgadas/pizza-presunto-e-queijo"><img src={presunto_queijo} alt="Pizza Presunto e Queijo" /></Link>
                  
                  <div className={PizzaCardsStyle.inner}>
                  <Link to="/salgadas/pizza-presunto-e-queijo" style={{fontFamily: "Poppins Regular", color: this.props.color}}>Pizza Presunto e Queijo</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza de presunto e queijo perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                    <div className={PizzaCardsStyle.border} />

                <div  className={PizzaCardsStyle.testinfo}>
                                 <img src={serve} alt="icone serve" />
                                    <div className={PizzaCardsStyle.testpic} style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>6 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>30 minutos
                                    </div>
                        </div>
                  </div>
              </article>

              <article className={PizzaCardsStyle.servico}>
                  <Link to="/salgadas/pizza-frango"><img src={frango} alt="Pizza Frango" /></Link>
                  
                  <div className={PizzaCardsStyle.inner}>
                  <Link to="/salgadas/pizza-frango" style={{fontFamily: "Poppins Regular", color: this.props.color}}>Pizza Frango</Link>
                  <h4 style={{fontFamily: "Poppins Regular", color: this.props.color}}>Receita de Pizza</h4>
                  <p style={{fontFamily: "Poppins Regular", color: this.props.color}}>Passo a passo para fazer uma pizza de frango perfeita 
                com pequenos e surpreendentes segredos que fazem toda a diferença!</p>

                <div className={PizzaCardsStyle.border} />

                <div  className={PizzaCardsStyle.testinfo}>
                                 <img src={serve} alt="icone serve" />
                                    <div className={PizzaCardsStyle.testpic} style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Serve:</span>
                                            <br/>6 porções
                                    </div>

                                    <img src={tempo} alt="icone tempo" />
                                    <div  style={{fontFamily: "Poppins Regular", color: this.props.color}}>
                                            <span>Tempo:</span>
                                            <br/>30 minutos
                                    </div>
                        </div>
                  </div>
              </article>
                           
        </main>
        
      );
  }
}
