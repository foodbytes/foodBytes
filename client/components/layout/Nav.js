import React, { Component } from "react"
import { Link } from "react-router"

class Nav extends Component{

  render(){
    return(
      <div className="container">
        <div className=" navli navbar-default navbar-fixed-top ">
          <Link to="/"><button  role="presentation" className=" home btn btn-md">Home</button></Link>
          <Link to="/recipes"><button role="presentation" className=" recipes btn btn-md">Recipes</button></Link>
        </div>
      </div>
    )
  }
}

export default Nav
