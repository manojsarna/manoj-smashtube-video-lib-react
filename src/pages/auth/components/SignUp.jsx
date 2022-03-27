export function SignUp({ setAuthVal }) {
  return (
    <div id="auth-signup" className="sm-main-auth-signup">
      <h2 className="fw-800">Signup</h2>

      <div className="auth-email-pass">
        <div className="sm-input-container input-user">
          <input
            type="email"
            className="input-basic input-basic-icon"
            placeholder="Enter Name"
            name="user"
          />
          <i className="icon-basic fas fa-user"></i>
        </div>
        <div className="sm-input-container input-user">
          <input
            type="email"
            className="input-basic input-basic-icon"
            placeholder="Enter Email"
            name="user"
          />
          <i className="icon-basic fas fa-envelope"></i>
        </div>
        <div className="sm-input-container input-pass">
          <input
            type="password"
            className="input-basic input-basic-icon"
            placeholder="Enter Password"
            name="password"
          />
          <i className="icon-basic fas fa-key"></i>
        </div>
        <div className="sm-input-container input-pass">
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
