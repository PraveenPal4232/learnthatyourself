import React, { Component } from "react";
import "./styles/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "./images/logo.svg";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Google Classroom" />
          </a>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="#">Browse</Link>
          <Link to="/course">Course</Link>
          <Link to="#">Workshops</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
