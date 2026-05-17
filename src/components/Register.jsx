import { useState } from "react";
import { useForm } from "react-hook-form";
import registerService from "services/register";
import "./Register.css";

function Register() {
  const [samePass, setSamePass] = useState(false);
  const [registeredError, setRegisteredError] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    if (values.password !== values.passwordConf) {
      return setSamePass(true);
    } else if (samePass) {
      setSamePass(false);
    }
    setLoading(true);
    registerService(values)
      .then((res) => {
        setLoading(false);
        if (res.email) return setRegistered(true);
        return setRegisteredError(true);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        return setRegisteredError(true);
      });
  };

  if (loading) {
    return (
      <>
        <h2 className="login__heading">Register</h2>
        <span className="login__checking">Registering...</span>
      </>
    );
  }

  if (registered) {
    return (
      <>
        <h2 className="login__heading">Register</h2>
        <span className="login__checking">You've been registered correctly.</span>
      </>
    );
  }

  return (
    <>
      <h2 className="login__heading">Register</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__label" htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            className={`login__input ${errors.email ? "input__error" : ""}`}
            placeholder="you@example.com"
            autoComplete="email"
            {...register("email", {
              required: { value: true, message: "Email is required" },
            })}
          ></input>
        </label>
        {errors.email && (
          <small className="input__error__message">
            {errors.email.message}
          </small>
        )}
        <label className="login__label" htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            className={`login__input ${errors.password ? "input__error" : ""}`}
            placeholder="••••••••"
            autoComplete="new-password"
            {...register("password", {
              required: { value: true, message: "Password is required" },
              maxLength: { value: 20, message: "Max 20 characters" },
              minLength: { value: 5, message: "Min 5 characters" },
            })}
          ></input>
        </label>
        {errors.password && (
          <small className="input__error__message">
            {errors.password.message}
          </small>
        )}
        <label className="login__label" htmlFor="passwordConf">
          Confirm Password
          <input
            id="passwordConf"
            type="password"
            className={`login__input ${
              errors.passwordConf ? "input__error" : ""
            }`}
            placeholder="••••••••"
            autoComplete="new-password"
            {...register("passwordConf", {
              required: { value: true, message: "Please confirm your password" },
              maxLength: { value: 20, message: "Max 20 characters" },
              minLength: { value: 5, message: "Min 5 characters" },
            })}
          ></input>
        </label>
        {errors.passwordConf && (
          <small className="input__error__message">
            {errors.passwordConf.message}
          </small>
        )}
        {samePass && (
          <small className="input__error__message">Passwords do not match</small>
        )}
        <button className="login__button">Register</button>
        {registeredError && (
          <small className="input__error__message">
            Something went wrong. Please try again.
          </small>
        )}
      </form>
    </>
  );
}

export default Register;
