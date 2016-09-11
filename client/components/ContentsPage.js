import React, { Component } from 'react'
import { Link } from 'react-router'

class ContentsPage extends Component {

  render () {
    return (
      <div className="jumbotron">
        <div className="page-header">
          <h1 className="text-center">Recipes List</h1>
        </div>
        <div className="row well content">
          <div className="content col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
          </div>
          <div className=" col-xs-12 col-sm-6 col-md-9 col-lg-9">
            <h3>Grilled Cheese Sandwich</h3>
            <span><h5>Indulge in an heavenly melt of cheese grilled in delicious slices</h5></span>
          </div>
        </div>

        <div className="row well content">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-9 col-lg-9">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    )
  }
}


export default ContentsPage
