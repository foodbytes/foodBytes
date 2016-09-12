import React, { Component } from "react";
import { Link } from "react-router"

class Nav extends Component{

  render(){

    return(


          <ul className="nav nav-tabs navbar-fixed-top">
            <li role="presentation" className="navli"><Link to="/">Home</Link></li>
            <li role="presentation" className="navli contents"><Link to="/contents">Table of contents</Link></li>
            <li role="presentation" className="navli"><Link to="/recipes">Recipes</Link></li>
          </ul>
        )}}
export default Nav
