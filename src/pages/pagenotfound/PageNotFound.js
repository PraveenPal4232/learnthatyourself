import React, { Component } from "react";

class PageNotFound extends Component {
  state = {};
  render() {
    return (
      <main>
        <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Opps : 404</h1>
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

export default PageNotFound;
