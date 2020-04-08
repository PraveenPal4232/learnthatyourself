import React, { Component } from "react";
import "./styles/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light justify-content-center mb-4">
        <Link to="/">Home</Link>
        <Link to="/course">Course</Link>
      </nav>
    );
  }
}

export default Header;
