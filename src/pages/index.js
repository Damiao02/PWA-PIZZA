import React from "react"
import PizzaHeader from "../components/pizza-header"

import {Link} from "gatsby"

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: "#ff00ff"
    }
  }

  mudaCor() {
    this.setState({color: "#0000ff"});
  }

  render() {
    return (
      <div>
        <PizzaHeader/>
       
      </div>
    )
  }
}
