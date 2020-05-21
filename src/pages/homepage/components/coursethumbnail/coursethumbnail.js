import React, { Component } from "react";
import "./style/style.css";
import CourseImg from "./image/1.webp";

class CourseThumbnail extends Component {
  state = {};

  render() {
    function commafy(num) {
      var str = num.toString().split(".");
      if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, "$1 ");
      }
      return str.join(".");
    }
    return (
      <div className="course-thumbnail">
        <div className="course-thumbnail-inner">
          <div className="course-image">
            <img src={this.props.CourseBanner} className="img-fluid" alt="" />
          </div>
          <div className="course-details">
            <div className="course-info">
              <p>{commafy(this.props.CourseStudents)} students</p>
              <p>
                {Math.floor(this.props.CourseTime / 60) !== 0
                  ? Math.floor(this.props.CourseTime / 60) + "h "
                  : false}
                {+(this.props.CourseTime % 60) + "m"}
              </p>
            </div>
            <h6 className="course-name">{this.props.CourseTitle}</h6>

            <div className="course-meta">
              <p className="course-author">{this.props.CourseAuthore}</p>
              <div className="course-status">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path d="M14.467,1.771H5.533c-0.258,0-0.47,0.211-0.47,0.47v15.516c0,0.414,0.504,0.634,0.802,0.331L10,13.955l4.136,4.133c0.241,0.241,0.802,0.169,0.802-0.331V2.241C14.938,1.982,14.726,1.771,14.467,1.771 M13.997,16.621l-3.665-3.662c-0.186-0.186-0.479-0.186-0.664,0l-3.666,3.662V2.711h7.994V16.621z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseThumbnail;
