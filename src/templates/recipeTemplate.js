import React from "react"
import { graphql } from "gatsby"
import {Link} from "gatsby"
import PizzaHeaderReceitas from "../components/pizza-header-receitas"
import PizzaHeaderCategoria from "../components/pizza-header-categoria"




export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
         
   <div>
     <PizzaHeaderReceitas/>
      
     <PizzaHeaderCategoria/>

    <div className="receitas">
      <div className="receita">
         <div className="inner">    
          <Link to="#">{frontmatter.title}</Link>
          <div  className="testinfo">
                                 <img src="https://github.com/Damiao02/PWA-PIZZA/blob/master/src/img/tray.png?raw=true" alt="icone serve" />
                                    <div className="testpic" >
                                            <span>Serve:</span>
                                            <br/>{frontmatter.porcao}
                                    </div>

                                    <img src="https://github.com/Damiao02/PWA-PIZZA/blob/master/src/img/timer.png?raw=true" alt="icone tempo" />
                                    <div>
                                            <span>Tempo:</span>
                                            <br/>{frontmatter.tempo}
                                    </div>
                        </div>  
          </div> 
          <Link to="#"><img src={frontmatter.cover} alt="Pizza Marguerita" /></Link>

              <div className="inner">

          <div className="recipe-content"
          dangerouslySetInnerHTML={{ __html: html}}/>

      </div> 
          
      </div>
    </div>

   

</div>
    

  )
}



export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        porcao
        tempo
        cover
      }
    }
  }
`


