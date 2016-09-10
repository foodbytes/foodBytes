import React, { Component } from 'react'
import { Link } from 'react-router'

class ContentsPage extends Component {

  render() {
    return (
      <div>
        {/* Header, image with text image button goes to the recipe page  */}
        <div className="page-header">
          <h1 className="text-center">Recipes List</h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-8 col-md-4 col-xs-12">
            <div className="thumbnail right-caption span4">
              <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
              <div className="caption">
              <h5>Grilled Cheese Sandwich</h5>
              <p>Indulge in an heavenly melt of cheese grilled in delicious slices</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ContentsPage
