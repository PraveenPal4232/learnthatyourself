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
                <h1>About</h1>
              </Tab>
              <Tab eventKey="reviews" title="Reviews 839">
                <h1>Reviews 839</h1>
              </Tab>
              <Tab eventKey="discussions" title="Discussions 127">
                <h1>Discussions 127</h1>
              </Tab>
              <Tab eventKey="projects_resources" title="Projects & Resourcest">
                <h1>Projects & Resources</h1>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Classes;
