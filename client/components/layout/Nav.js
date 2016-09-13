import React, { Component } from "react"
import { Link } from "react-router"

class Nav extends Component{

  render(){
    return(
      <ul className="container  navbar-header">
        <button  role="presentation" className="btn btn-primary"><Link to="/">Home</Link></button>
        <button role="presentation" className=" contents"><Link to="/recipes">Recipes</Link></button>
      </ul>
    )
  }
}

export default Nav
