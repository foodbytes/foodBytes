import React, { Component } from 'react'
import { Link } from 'react-router'

class ContentsPage extends Component {

  render() {
    return (
      <div>
        <div className="page-header">
          <h1 className="text-center">Recipes List</h1>
        </div>
        <div className="row">
          <div className="content col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
            <h1>Hello</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    )
  }
}


export default ContentsPage
