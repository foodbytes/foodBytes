import React, { Component } from 'react';
import { Link } from "react-router";
import Nav from './layout/Nav';


class Layout extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
      {/* default nav bar */}
      <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default Layout
