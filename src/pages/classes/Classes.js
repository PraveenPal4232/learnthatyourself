import React, { Component } from "react";
import "./style/classes.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import Icon from "../../assets/icon/best_suited_for.png";

class Classes extends Component {
  state = {};
  render() {
    return (
      <div className="class-page">
        <div className="container-fluid class_warp dark_background">
          <div className="class_intro pt-4 pb-2">
            <h2>Yoga for Uncertain Times</h2>
            <h6>Adriene Mishler | Follow</h6>
          </div>
          <div class="video_warp pb-5">
            <div className="row">
              <div className="col-8">
                <main>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/DFVzpvz0FgQ"
                    />
                  </div>
                </main>
              </div>
              <div className="col-4">
                <aside>
                  <p>8 Lessons (43m)</p>
                  <ul className="session-list">
                    <li className="session-item active">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        1. Yoga For Loneliness - Yoga With Adriene
                      </div>
                      <div className="session-time">20:42</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        2. Yoga For Insecurity | Yoga With Adriene
                      </div>
                      <div className="session-time">23:37</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        3. Yoga For Change And Drain | Yoga With Adriene
                      </div>
                      <div className="session-time">22:49</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        4. Anchor In Hope Yoga Practice | Yoga With Adriene
                      </div>
                      <div className="session-time">18:07</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        5. Yoga for Mood Swings - Yoga With Adriene
                      </div>
                      <div className="session-time">23:44</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        6. Yoga For When You're Angry
                      </div>
                      <div className="session-time">18:19</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        7. No Fear Yoga - Yoga With Adriene
                      </div>
                      <div className="session-time">37:27</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        3. Yoga For Change And Drain | Yoga With Adriene
                      </div>
                      <div className="session-time">22:49</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        4. Anchor In Hope Yoga Practice | Yoga With Adriene
                      </div>
                      <div className="session-time">18:07</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        5. Yoga for Mood Swings - Yoga With Adriene
                      </div>
                      <div className="session-time">23:44</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        6. Yoga For When You're Angry
                      </div>
                      <div className="session-time">18:19</div>
                    </li>
                    <li className="session-item">
                      <div className="session-icon mr-3">
                        <svg
                          className="svg-icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z" />
                        </svg>
                      </div>
                      <div className="session-name mr-3">
                        7. No Fear Yoga - Yoga With Adriene
                      </div>
                      <div className="session-time">37:27</div>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div className="class_info pt-4 pb-4">
          <div className="container">
            <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
              <Tab eventKey="about" title="About">
                <div className="row">
                  <div className="col-8">
                    <div className="#">
                      <h3>About This Class</h3>
                      <p>
                        <strong>
                          Dream of finally finishing that draft or launching
                          that side-hustle? Make your next creative project your
                          best yet, with simple steps from creative superstar
                          Emma Gannon!
                        </strong>
                      </p>
                      <p>
                        In this new class, Emma shares the framework that
                        allowed her to overcome self-doubt and carve her own
                        path as an author, broadcaster, and podcast host. The
                        secret to her success? Fed up with feeling afraid—of
                        failure, of not being good enough, even of success—Emma
                        dug into the science behind self-sabotage and learned
                        exactly how to get out of her own way.
                      </p>
                      <p>
                        <strong>
                          Now, Emma is sharing what she’s learned so that you
                          can do the same: unlock your creative potential while
                          feeling energized and empowered!
                        </strong>
                      </p>
                      <p>Together with Emma, you will:</p>
                      <ul>
                        <li>
                          <strong>Identify the patterns</strong> in your life,
                          and let go of habits that don’t serve you
                        </li>
                        <li>
                          <strong>Cut out comparison</strong> to figure out what
                          you really want and need
                        </li>
                        <li>
                          <strong>Silence your inner critic</strong> by talking
                          back to negative beliefs and behaviors
                        </li>
                        <li>
                          <strong>Own your success</strong> and
                          vulnerability—both go hand-in-hand with creativity
                        </li>
                      </ul>
                      <p>
                        Packed with insights and examples from Emma’s personal
                        journey, this class is designed for every creative who
                        needs a pep-talk or extra push to get started—and
                        includes five exclusive downloadable worksheets to
                        support you along the way.
                      </p>
                      <p>
                        Whether you’re looking to break through block, remove
                        self-imposed pressure, or simply approach each new
                        project with intention, this 45-minute class will unlock
                        your confidence as a creative. Get started and celebrate
                        taking the first step!
                      </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="#">
                      <div className="course_status">
                        <div className="course_levels text-center">
                          <svg
                            className="svg-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
                          </svg>

                          <div className="mt-2">All levels</div>
                        </div>
                        <div className="course_students text-center">
                          <h4>57,582</h4> Students
                        </div>
                        <div className="course_projects text-center">
                          <h4>2,578</h4> Projects
                        </div>
                      </div>
                      <div className="course_author mt-4">
                        <div className="author_avatar">
                          <div class="avatar_img mr-3">
                            <img
                              src="https://pbs.twimg.com/profile_images/1265131512485285889/O_Cp7b7F_200x200.jpg"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="sort_bio">
                            <span>Adriene Mishler </span>
                            <span className="ml-2">Follow</span>
                            <p>Actress, Yogi, Writer, Entrepreneur</p>
                          </div>
                        </div>
                        <div className="author_bio">
                          <p>
                            Adriene Mishler is an actress, writer, international
                            yoga teacher and entrepreneur from Austin, Texas. On
                            a mission to get the tools of yoga into schools and
                            homes, Adriene hosts the popular YouTube channel
                            Yoga with Adriene, an online community of over 7
                            million viewers. Yoga with Adriene provides high
                            quality practices on yoga and mindfulness at no cost
                            to inspire people of all ages, shapes and sizes.
                          </p>
                          <p>
                            <strong>See full profile</strong>
                          </p>
                        </div>
                      </div>
                      <div className="course_skills mt-4">
                        <p>
                          <strong>Skills in this Class:</strong>
                        </p>
                        <div className="skill_tags">
                          <a href="#">Health &amp; Wellness</a>
                          <a href="#">Lifestyle</a>
                          <a href="#">Yoga</a>
                          <a href="#">Wellness</a>
                          <a href="#">Fitness</a>
                          <a href="#">PracticeYoga</a>
                          <a href="#">YogaWithAdriene</a>
                          <a href="#">Yogaforall </a>
                          <a href="#">Yoga Love</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="reviews" title="Reviews 839">
                <div className="ef">
                  <h3>How students rated this class</h3>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <div className="inner_gray">
                        <h4>Best Suited for</h4>
                        <img src={Icon} alt="" className="mt-2" />
                        <br />
                        <span className="span_white mt-3 mb-2">
                          Intermediate
                        </span>
                        <br />
                        <span>(Based on 385 reviews)</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inner_gray">
                        <h4>Most Liked</h4>
                        <span className="span_white mt-3">
                          339 Engaging Teacher
                        </span>
                        <br />
                        <span className="span_white mt-3">
                          322 Helpful Examples
                        </span>
                        <br />
                        <span className="span_white mt-3">
                          299 Clarity of Instruction
                        </span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="inner_gray">
                        <h4>Expectations Met?</h4>
                        <ul className="mt-3">
                          <li className="enabled-expectation">
                            <div className="review-tag">Exceeded!</div>
                            <div class="graph-item">
                              <span style={{ width: "70%" }}></span>
                            </div>
                            <div className="percentage">70%</div>
                          </li>
                          <li className="enabled-expectation">
                            <div className="review-tag">Yes!</div>
                            <div class="graph-item">
                              <span style={{ width: "28%" }}></span>
                            </div>
                            <div className="percentage">28%</div>
                          </li>
                          <li className="enabled-expectation">
                            <div className="review-tag">Somewhat!</div>
                            <div class="graph-item">
                              <span style={{ width: "2%" }}></span>
                            </div>
                            <div className="percentage">2%</div>
                          </li>
                          <li className="enabled-expectation">
                            <div className="review-tag">Not really</div>
                            <div class="graph-item">
                              <span style={{ width: "0%" }}></span>
                            </div>
                            <div className="percentage">0%</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <Tabs
                    defaultActiveKey="a1"
                    id="uncontrolled-tab-example"
                    className="mt-4 mb-4"
                  >
                    <Tab eventKey="a1" title="Highest Rated">
                      <div class="a">
                        <ul>
                          <li className="new_reviews populated">
                            <div className="user_snippet">
                              <div className="user_avarat mr-3">
                                <img src={Icon} alt="" />
                              </div>
                              <h5 >Peter Kuznicki</h5>
                            </div>
                            <div className="review_content">
                              <div className="review_feedback">
                                <div class="review_expectations">
                                  This class <strong>exceeded</strong> my
                                  expectations!
                                </div>
                                <div class="review_level">
                                  <svg
                                    class="svg-icon"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"></path>
                                  </svg>
                                  <span className="ml-2">
                                    I recommend it for
                                    <strong> Advanced Levels.</strong>
                                  </span>
                                </div>
                              </div>
                              <div className="review_body">
                                Jessica is such a fantastic communicator,
                                articulating each variable with precision and
                                clarity! Great class, added an extra dimension
                                to the minutae of type
                              </div>
                            </div>
                            <div className="review-timestamp">
                              Posted 1 week ago
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Tab>
                    <Tab eventKey="a3" title="Lowest Rated">
                      <h1>A3</h1>
                    </Tab>
                    <Tab eventKey="a21" title="Most Recent">
                      <h1>A2</h1>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab eventKey="discussions" title="Discussions 127">
                <h3>Discussions 127</h3>
              </Tab>
              <Tab eventKey="projects_resources" title="Projects & Resourcest">
                <h3>Project Description</h3>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Classes;
