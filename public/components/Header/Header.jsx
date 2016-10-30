import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h1> PyDReact </h1>
        <span>Python framework combine with Django with React and NodeJs</span>
        <img className="fork" src="assets/images/fork.png" alt="" />
      </header>
    );
  }
}

export default Header;
