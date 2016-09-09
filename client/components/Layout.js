import React, { Component } from 'react';
import { Link } from "react-router";


class Layout extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
      {/* default nav bar */}
      <p>this this the layout page</p>
      <button type="button"> <Link to="/contents"> Contents Page</Link></button>
        {this.props.children}
      </div>
    );
  }
}

export default Layout
