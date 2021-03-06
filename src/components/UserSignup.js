import React from "react";
// import LoginImg from "../../login.svg";

export class UserSignin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Sign in</div>
        <div className="content">
          <div className="image">
           {/*<img src={LoginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="Enter Username" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter Email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
              />
            </div>
          </div>
        </div>

        <div className="footer">
          <button type="button" className="btn">
            Sign up
          </button>

          <div>
            <p>Click The blue box on the left to Sign up</p>
          </div>
        </div>
      </div>
    );
  }
}
