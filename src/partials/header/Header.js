import React, { Component, Fragment } from "react";
import "./styles/Header.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Logo from "./images/logo.svg";
import SignIn from "../signIn/signIn";
import SignUp from "../signUp/signUp";

class Header extends Component {
  state = {
    showSignIn: false,
    showSignUp: false,
  };

  toggleSignIn = () => {
    this.setState((prevState) => ({ showSignIn: !prevState.showSignIn }));
  };

  toggleSignUp = () => {
    this.setState((prevState) => ({ showSignUp: !prevState.showSignUp }));
  };

  render() {
    return (
      <div>
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
            <Link onClick={this.toggleSignIn}>Sign In</Link>
            <button class="btn btn-sm btn-green" onClick={this.toggleSignUp}>
              Sign Up
            </button>
          </nav>
        </header>
        <SignIn show={this.state.showSignIn} onHide={this.toggleSignIn} />
        <SignUp show={this.state.showSignUp} onHide={this.toggleSignUp} />
      </div>
    );
  }
}

export default Header;
