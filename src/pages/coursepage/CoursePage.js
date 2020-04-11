import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseAction from "../../redux/actions/courseAction";

class CoursePage extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
    // alert(this.state.course.title);
  };

  render() {
    return (
      <main>
        <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">Course Page</h1>
              <form className="mt-4" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.course.title}
                />

                <input type="submit" value="Add" />

                {this.props.courses.map((course) => (
                  <div key={course.title}>{course.title}</div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(courseAction.createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
