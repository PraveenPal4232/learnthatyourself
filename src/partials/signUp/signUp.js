import React, { Component } from "react";
import "./styles/signUp.css";
import { Modal, Button } from "react-bootstrap";

class SignUp extends Component {
  state = {
    usingMail: false,
  };
  toggleUsingMail = () => {
    this.setState((prevState) => ({ usingMail: !prevState.usingMail }));
  };
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="signup_modal"
      >
        <div className="modal_inner">
          <div className="row">
            <div className="col-5">
              <div className="modal_left">
                <div className="self_center">
                  <h3>Join Skillshare for Free</h3>
                  <hr className="hr_modal hr_green" />
                  <h5>
                    Explore your creativity with thousands of inspiring classes
                    in design, illustration, photography, and more.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="modal_right">
                <div className="close_modal mb-3 text-right">
                  <svg
                    className="svg-icon pointer"
                    viewBox="0 0 20 20"
                    onClick={this.props.onHide}
                  >
                    <path
                      fill="none"
                      d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"
                    ></path>
                  </svg>
                </div>
                <div className="social_btn">
                  <button className="btn btn-primary btn-block mb-3">
                    Sign Up with Facebook
                  </button>
                  <button className="btn btn-primary btn-block mb-1">
                    Sign Up with Google
                  </button>
                </div>
                <hr className="hr_modal hr_or" />
                <h5
                  className={
                    this.state.usingMail
                      ? "mb-3 text-center pointer d-none"
                      : "mb-3 text-center pointer"
                  }
                  onClick={this.toggleUsingMail}
                >
                  Sign Up Using Email
                </h5>
                <div
                  className={
                    this.state.usingMail
                      ? "using-mail mb-3"
                      : "using-mail mb-3 d-none"
                  }
                >
                  <form>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Create Password"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-primary btn-block">
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <h6 className="mb-0 text-center">
                  Already a member? <a href="#">Sign In</a>
                </h6>
                <hr className="hr_modal" />
                <p className="mb-0 small">
                  By signing up you agree to Skillshare's Terms of
                  <a href="#"> Service</a> and <a href="#">Privacy Policy</a>.
                  This page is protected by reCAPTCHA and is subject to Google's
                  Terms of
                  <a href="#"> Service</a> and <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default SignUp;
