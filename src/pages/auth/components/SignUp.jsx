import { useState } from "react";

export function SignUp({ setAuthVal }) {
  const [signUpDetails, setsignUpDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    show: false,
    message: "",
  });
  return (
    <div id="auth-signup" className="sm-main-auth-signup">
      <div
        className={`sm-notification  sm-not-error ${
          errorMessage.show ? "sm-error-show" : "sm-error-hide"
        }`}
      >
        <span className="sm-alert-icon">
          <i className="fas fa-exclamation-circle"></i>
        </span>
        <span>{errorMessage.message}</span>
      </div>
      <h2 className="fw-800">Signup</h2>

      <div className="auth-email-pass">
        <div className="sm-input-container input-user-firstname">
          <input
            type="text"
            className="input-basic input-basic-icon"
            placeholder="Enter First Name"
            name="firstname"
            //value={}
          />
          <i className="icon-basic fas fa-user"></i>
        </div>
        <div className="sm-input-container input-user-lastname">
          <input
            type="text"
            className="input-basic input-basic-icon"
            placeholder="Enter Last Name"
            name="lastname"
          />
          <i className="icon-basic fas fa-user"></i>
        </div>
        <div className="sm-input-container input-user-email">
          <input
            type="email"
            className="input-basic input-basic-icon"
            placeholder="Enter Email"
            name="email"
          />
          <i className="icon-basic fas fa-envelope"></i>
        </div>
        <div className="sm-input-container input-user-password">
          <input
            type="password"
            className="input-basic input-basic-icon"
            placeholder="Enter Password"
            name="password"
          />
          <i className="icon-basic fas fa-key"></i>
        </div>
        <div className="sm-input-container input-user-confirm-password">
          <input
            type="password"
            className="input-basic input-basic-icon"
            placeholder="Confirm Password"
            name="password"
          />
          <i className="icon-basic fas fa-key"></i>
        </div>
      </div>

      <div className="sm-auth-accept">
        <input type="checkbox" value="" />
        <span className="sm-auth-signup-txt">
          I accept all
          <a href="." className="sm-auth-forget">
            Terms &amp; Conditions
          </a>
        </span>
      </div>

      <button
        id="sm-auth-signup-btn"
        className="auth-btn btn btn-primary btn-bold "
      >
        Signup
      </button>

      <button
        id="sm-auth-login-btn"
        className="auth-btn btn btn-primary btn-bold btn-outline "
        onClick={() => setAuthVal(true)}
      >
        Login
      </button>
    </div>
  );
}
