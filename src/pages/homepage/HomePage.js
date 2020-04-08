import React, { Component } from "react";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Home Page</h1>
              <p className="lead">
                This is a modified jumbotron that occupies the entire horizontal
                space of its parent.
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default HomePage;
