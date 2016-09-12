import React from 'react'
import { Link } from 'react-router'

export default ({recipe}) => {
  return (
    <div className="row well content">
      <Link to={`/recipes/${recipe.id}`}>
        <div className="content col-xs-12 col-sm-6 col-md-3 col-lg-3">
          <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
        </div>
        <div className=" col-xs-12 col-sm-6 col-md-9 col-lg-9">
          <h3>{recipe.name}</h3>
          <span><h5>{recipe.description}</h5></span>
        </div>
      </Link>
    </div>
  )
}
