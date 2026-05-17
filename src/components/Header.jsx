import { Link, useRoute } from "wouter";
import "./Header.css";
import { useMemo } from "react";
import useUser from "hooks/useUser";

function Header() {
  const { isLogged, logout } = useUser();
  const [matchLogin] = useRoute("/login");
  const [matchRegister] = useRoute("/register");

  const loginContent = useMemo(() => {
    if (matchLogin) return null;
    return isLogged ? (
      <button className="header__logout" onClick={logout}>Logout</button>
    ) : (
      <Link to="/login" className="header__nav--primary">Login</Link>
    );
  }, [matchLogin, isLogged, logout]);

  const regContent = useMemo(() => {
    if (matchRegister || isLogged) return null;
    return <Link to="/register">Register</Link>;
  }, [matchRegister, isLogged]);

  return (
    <header className="gf__header">
      <Link to="/" className="header__brand">
        <span className="header__wordmark">Giphy</span>
      </Link>
      <nav className="header__nav">
        {regContent}
        {loginContent}
      </nav>
    </header>
  );
}

export default Header;
