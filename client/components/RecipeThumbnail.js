import React from 'react'
import { Link } from 'react-router'

export default ({recipe}) => {
  return (
    <div className="row well content">
      <Link to={`/recipes/${recipe.id}`}>
        <div className="content col-xs-12 col-sm-6 col-md-4 col-lg-4">
          <img width ='300'height ='200'src={`${recipe.image_path}`}alt="sandwich"></img>
        </div>
        <div className=" col-xs-12 col-sm-6 col-md-8 col-lg-8">
          <h3>{recipe.name}</h3>
          <span><h5>{recipe.description}</h5></span>
        </div>
      </Link>
    </div>
  )
}
