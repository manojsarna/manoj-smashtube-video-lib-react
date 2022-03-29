export function Login({ setAuthVal }) {
  return (
    <div id="auth-login" className="sm-main-auth-login">
      <h2 className="fw-800">Login</h2>

      <div className="auth-email-pass">
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
      </div>

      <div className="auth-for-rem">
        <a href="." className=" sm-auth-forget">
          Forgot your password?
        </a>
        <div className="sm-auth-rem">
          <input type="checkbox" value="" />
          <span className="auth-rem-text">Remember Me</span>
        </div>
      </div>

      <button className="auth-btn btn btn-primary btn-bold ">Login</button>

      <button
        id="sm-auth-signup-btn"
        className="auth-btn btn btn-bold btn-outline "
        onClick={() => setAuthVal(false)}
      >
        Signup
      </button>
    </div>
  );
}
