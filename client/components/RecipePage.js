import React from 'react'

class RecipePage extends React.Component {

  render(){
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="caption text-center">
              <h3>Food Bytes</h3>
            </div>
           <div className="thumbnail">
             <img src="http://cook.sndimg.com/content/dam/images/cook/fullset/2012/9/24/0/CC-kelsey-nixon_grilled-cheese-sandwich-recipe-02_s4x3.jpg/jcr:content/renditions/cq5dam.web.266.200.jpeg" alt="sandwich" ></img>
           </div>
          </div>
        </div>
        <h3>Cook time: </h3>
        <h3>Ingredients: </h3>
        <h3>Instructions: </h3>
      </div>
    )
  }
}

export default RecipePage
