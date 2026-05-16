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

  if(loading){
    return<><h2>Register Form</h2>
    <span>Registering...</span>
    </>
  }

  if(registered){
    return<><h2>Register Form</h2>
    <span>You've been registered correctly ✅</span>
    </>
  }

  return (
    <>
      <h2>Register Form</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__label" htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            className={`login__input ${errors.email ? "input__error" : ""}`}
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "required",
              },
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
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "required",
              },
              maxLength: {
                value: 20,
                message: "max length 20",
              },
              minLength: {
                value: 5,
                message: "min length 5",
              },
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
            placeholder="Confirm Password"
            {...register("passwordConf", {
              required: {
                value: true,
                message: "required",
              },
              maxLength: {
                value: 20,
                message: "max length 20",
              },
              minLength: {
                value: 5,
                message: "min length 5",
              },
            })}
          ></input>
        </label>
        {errors.passwordConf && (
          <small className="input__error__message">
            {errors.passwordConf.message}
          </small>
        )}
        {samePass && (
          <small className="input__error__message">password conflict</small>
        )}
        <button className="login__button"> Register </button>
        {registeredError && (
          <small className="input__error__message">
            something wrong in register
          </small>
        )}
      </form>
    </>
  );
}

export default Register;
