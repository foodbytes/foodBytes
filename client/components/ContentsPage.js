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
        <div className="col-sm-6 col-md-6 col-xs-6">

          <div className="thumbnail" style="border:none; background:white;">

            <div className="col-sm-6 col-md-6 col-xs-12 image-container">
                <img src="images/online_learning.jpg" style="height:200px; margin-left:-15px;"></img>
            </div>

            <div className="col-sm-6 col-md-6 col-xs-12">
                <h3>Hello World</h3>
                <p style="font-size:10px; color:#03225C;"></p>
            </div>
          </div>

        </div>

      </div>
    )
  }
}


export default ContentsPage
