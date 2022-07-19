import { useState, useEffect } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";

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
      <h2>Login</h2>
      {isLoading && <span>Checking...</span>}
      {!isLoading && (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={values.email}
            type="text"
            name="email"
            placeholder="Email"
          ></input>
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            name="password"
            placeholder="Password"
          ></input>
          <button type="submit" name="login">
            Login
          </button>
        </form>
      )}
      {isErrorLogin && <span>Error...</span>}
    </>
  );
}

export default Login;
