import { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./Login.css";

function Login() {
  const [, navigate] = useLocation();
  const { isLogged, login, isErrorLogin, isLoading } = useUser();
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: values.email, password: values.password });
  };

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  return (
    <>
      <h2 className="login__heading">Login</h2>
      {isLoading && <span className="login__checking">Checking...</span>}
      {!isLoading && (
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label" htmlFor="email">
            Email
            <input
              onChange={handleChange}
              value={values.email}
              type="email"
              id="email"
              name="email"
              className="login__input"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>
          <label className="login__label" htmlFor="password">
            Password
            <input
              onChange={handleChange}
              value={values.password}
              type="password"
              id="password"
              name="password"
              className="login__input"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>
          <button type="submit" className="login__button" name="login">
            Login
          </button>
        </form>
      )}
      {isErrorLogin && <span className="login__error">Invalid email or password. Try again.</span>}
    </>
  );
}

export default Login;
