import React, { Component } from "react";
import { Link } from "react-router"

class Nav extends Component{

  render(){

    return(
      <ul className="nav nav-tabs">
        <li role="presentation"><Link to="/">Home</Link></li>
        <li role="presentation"><Link to="/contents">Table of conents</Link></li>
      </ul>
    );
  }
}

export default Nav
