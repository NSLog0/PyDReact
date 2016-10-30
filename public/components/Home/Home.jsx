import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to!</h1>
        <p>Django and ReactJs simple project create by <a href="www.algorithmtut.com">Algorithmtut</a>
        </p>
        <hr />
        <div className="logo">
          <img className="img-gray img-logo" src="assets/images/node.png" alt="" />
          <img className="img-gray img-logo" src="assets/images/python.png" alt="" />
          <img className="img-gray img-logo" src="assets/images/react.png" alt="" />
          <img className="img-gray img-logo" src="assets/images/webpack.png" alt="" />
        </div>
      </div>
    );
  }
}

export default App;
