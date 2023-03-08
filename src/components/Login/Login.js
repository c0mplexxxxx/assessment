import React, { useState } from "react";
import "normalize.css";
import Spinner from "../Spinner/Spinner";
import "./login.scss";

const Login = ({ db, errors, setLogIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  console.log(loading);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = db.find((user) => user.email === email);
    setLoading(true);
    //Fake call API
    setTimeout(() => setLoading(false), 2000);
    if (userData) {
      if (userData.password !== password) {
        setErrorMessages(
          "Your password is incorrect or this account doesn't exist"
        );
      } else {
        //Fake call API
        setTimeout(() => setLogIn(true), 2000);
      }
    } else {
      setErrorMessages(
        "Your password is incorrect or this account doesn't exist"
      );
    }
  };
  const handleCheck = () => {
    setCheck((prev) => !prev);
  };
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-container">
          <div className="login__heading">Login</div>
          <div className="login__content">
            <form onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <div className="email-field">
                  <div className="email-label">
                    <label htmlFor="email">Email:</label>
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder="example@kyanon.digital"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="password-field">
                  <div className="password-label">
                    <label htmlFor="password">Password:</label>
                  </div>
                  <input
                    type={check ? "text" : "password"}
                    placeholder="******"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errorMessages && !loading ? (
                  <div className="errors">{errorMessages}</div>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
          <div className="login__footer">
            <div className="show-password">
              <input
                type="checkbox"
                id="checkbox"
                checked={check}
                onChange={handleCheck}
              />
              <label htmlFor="checkbox">Show password</label>
            </div>
            <div className="btn">
              <button type="submit" onClick={handleSubmit}>
                {loading ? <Spinner /> : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
