import { Link, useRoute } from "wouter";
import "./Header.css";
import { useMemo } from "react";
import useUser from "hooks/useUser";

function Header() {
  const { isLogged, logout } = useUser();
  const [matchLogin] = useRoute("/login");
  const [matchRegister] = useRoute("/register");

  const loginContent = useMemo(() => {
    return !matchLogin ? (
      isLogged ? (
        <button className="header__logout" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )
    ) : null;
  },[matchLogin, isLogged, logout]);

  const regContent = useMemo(() => {
    return !matchRegister ? (
      isLogged ? (
        null
      ) : (
        <Link to="/register">Register</Link>
      )
    ) : null;
  },[matchRegister, isLogged]);


  return <header className="gf__header">
    {regContent}
    {loginContent}
  </header>;
}

export default Header;
