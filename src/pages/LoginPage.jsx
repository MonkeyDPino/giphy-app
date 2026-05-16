import Login from "components/Login";
import Title from "components/Title";

function LoginPage() {
  return (<>
  <Title title="Login | Giphy"/>
    <div className="login__page">
      <Login></Login>
    </div>
    </>
  );
}

export default LoginPage;
