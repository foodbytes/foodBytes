import React, { Component } from "react"
import { Link } from "react-router"

class Nav extends Component{

  render(){
    return(

      <div className="container">
        <div className=" navli navbar-default navbar-fixed-top ">
          <Link to="/"><button  role="presentation" className=" nav home btn btn-md">Home</button></Link>
          <Link to="/recipes"><button role="presentation" className=" nav recipes btn btn-md">Recipes</button></Link>
          <div className=" col-sm-3 col-md-3 pull-right">
            <form className=" navbar-form" role="search">
              <div className=" input-group">
                <input type="text" className=" input-group"placeholder="Search" name="q"/>
                <div className=" input-group-btn">
                  <button className=" btn btn-default" type="submit"><i className=" glyphicon glyphicon-search"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav
