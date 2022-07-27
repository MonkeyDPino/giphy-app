import { useForm } from "react-hook-form";
import "./Register.css"

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
    console.log(errors);
  };

  console.log(errors)

  return (
    <>
      <h2>Register Form</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__label" htmlFor="email">
          Email
          <input
            id="email"
            className={`login__input ${errors.email?"input__error":""}`}
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Requerido",
              },
              maxLength: {
                value: 10,
                message: "max length 20",
              },
            })}
          ></input>
        </label>
        {errors.email && (
          <small className="input__error__message">{errors.email.message}</small>
        )}
        <label className="login__label" htmlFor="password">
          Password
          <input
            id="password"
            className={`login__input ${errors.password?"input__error":""}`}
            placeholder="Password"
            {...register("password", { required: true })}
          ></input>
        </label>
        {errors.password && (
          <small className="input__error__message">{errors.password.message}</small>
        )}
        <label className="login__label" htmlFor="passwordConf">
          Confirm Password
          <input
            id="passwordConf"
            className={`login__input ${errors.passwordConf?"input__error":""}`}
            placeholder="Confirm Password"
            {...register("passwordConf", { required: true })}
          ></input>
        </label>
        {errors.passwordConf && (
          <small className="input__error__message">{errors.passwordConf.message}</small>
        )}
        <button className="login__button"> Register </button>
      </form>
    </>
  );
}

export default Register;
