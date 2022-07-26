import { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./Login.css";

function Login() {
  const [, navigate] = useLocation();
  const { isLogged, login, isErrorLogin, isLoading } = useUser();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: [e.target.value],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: values.email, password: values.password });
  };

  useEffect(() => {
    if (isLogged) {
      navigate("/");
    }
  }, [isLogged, navigate]);

  return (
    <>
      {isLoading && <span>Checking...</span>}
      {!isLoading && (
        <form className="login__form" onSubmit={handleSubmit}>
          <label className="login__label" for="email">
            Email
            <input
              onChange={handleChange}
              value={values.email}
              type="text"
              id="email"
              name="email"
              className="login__input"
              placeholder="Email"
            ></input>
          </label>

          <label className="login__label" for="password">
            Password
            <input
              onChange={handleChange}
              value={values.password}
              type="password"
              id="password"
              name="password"
              className="login__input"
              placeholder="Password"
            ></input>
          </label>

          <button type="submit" className="login__button" name="login">
            Login
          </button>
        </form>
      )}
      {isErrorLogin && <span>Error...</span>}
    </>
  );
}

export default Login;
