import React, { Component } from "react";
import "./styles/style.css";
import HomeBanner from "./components/homebanner/homebanner";
import CourseThumbnail from "./components/coursethumbnail/coursethumbnail";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleData from "../../redux/initialState.json";

class HomePage extends Component {
  state = {};
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <main className="homepage">
        <HomeBanner />

        <div className="container">
          {/* Recommended For You */}
          <div className="course-row">
            <div className="course-row-info">
              <h3>Recommended For You</h3>
              <button className="btn btn-sm btn-green">See More</button>
            </div>
            <div className="course-row-inner">
              <div className="row">
                {SampleData.allCourses.slice(0, 4).map((course, i) => (
                  <div className="col-md-3" key={i}>
                    <CourseThumbnail
                      key={i}
                      CourseTitle={course.Title}
                      CourseStudents={course.Students}
                      CourseTime={course.Time}
                      CourseAuthore={course.Authore}
                      CourseBanner={course.Banner}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Recommended For You */}
          {/* Trending Classes */}
          <div className="course-row">
            <div className="course-row-info">
              <h3>Trending Classes</h3>
              <button className="btn btn-sm btn-green">See More</button>
            </div>
            <div className="course-row-inner">
              <Slider {...settings}>
                <div>
                  <div className="row">
                    {SampleData.allCourses.slice(8, 12).map((course, i) => (
                      <div className="col-md-3" key={i}>
                        <CourseThumbnail
                          key={i}
                          CourseTitle={course.Title}
                          CourseStudents={course.Students}
                          CourseTime={course.Time}
                          CourseAuthore={course.Authore}
                          CourseBanner={course.Banner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="row">
                    {SampleData.allCourses.slice(0, 4).map((course, i) => (
                      <div className="col-md-3" key={i}>
                        <CourseThumbnail
                          key={i}
                          CourseTitle={course.Title}
                          CourseStudents={course.Students}
                          CourseTime={course.Time}
                          CourseAuthore={course.Authore}
                          CourseBanner={course.Banner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="row">
                    {SampleData.allCourses.slice(8, 12).map((course, i) => (
                      <div className="col-md-3" key={i}>
                        <CourseThumbnail
                          key={i}
                          CourseTitle={course.Title}
                          CourseStudents={course.Students}
                          CourseTime={course.Time}
                          CourseAuthore={course.Authore}
                          CourseBanner={course.Banner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* Trending Classes */}
          {/* Featured On Skillshare */}
          <div className="course-row">
            <div className="course-row-info">
              <h3>Featured On Skillshare</h3>
              <button className="btn btn-sm btn-green">See More</button>
            </div>
            <div className="course-row-inner">
              <Slider {...settings}>
                <div>
                  <div className="row">
                    {SampleData.allCourses.slice(4, 8).map((course, i) => (
                      <div className="col-md-3" key={i}>
                        <CourseThumbnail
                          key={i}
                          CourseTitle={course.Title}
                          CourseStudents={course.Students}
                          CourseTime={course.Time}
                          CourseAuthore={course.Authore}
                          CourseBanner={course.Banner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="row">
                    {SampleData.allCourses.slice(8, 12).map((course, i) => (
                      <div className="col-md-3" key={i}>
                        <CourseThumbnail
                          key={i}
                          CourseTitle={course.Title}
                          CourseStudents={course.Students}
                          CourseTime={course.Time}
                          CourseAuthore={course.Authore}
                          CourseBanner={course.Banner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="row">
                    {SampleData.allCourses.slice(0, 4).map((course, i) => (
                      <div className="col-md-3" key={i}>
                        <CourseThumbnail
                          key={i}
                          CourseTitle={course.Title}
                          CourseStudents={course.Students}
                          CourseTime={course.Time}
                          CourseAuthore={course.Authore}
                          CourseBanner={course.Banner}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* Featured On Skillshare */}
        </div>
      </main>
    );
  }
}

export default HomePage;
