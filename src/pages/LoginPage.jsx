import Login from "components/Login";
import Title from "components/Title";

function LoginPage() {
  return (
    <>
      <Title title="Login | Giphy" />
      <div className="page-container">
        <Login />
      </div>
    </>
  );
}

export default LoginPage;
