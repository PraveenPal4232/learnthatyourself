import React, { Component } from "react";
import "./style/style.css";
import BannerImage from "./images/1.jpg";

class HomeBanner extends Component {
  state = {};
  render() {
    return (
      <div
        className="home-banner"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="container">
          <div className="banner-inner text-white">
            <h1>Hand-Code Your First Website: HTML + CSS Basics</h1>
            <p>
              During the class you'll be creating a website for your favourite
              cartoon hero. I'll share my insights and best practices for
              planning and creating a simple one-page website.
            </p>
            <button className="btn btn-lg btn-green">Watch Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
