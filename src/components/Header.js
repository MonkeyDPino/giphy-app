import { Link } from "wouter";
import "./Header.css";
import useUser from "hooks/useUser";

function Header() {
  const { isLogged, logout } = useUser();

  return (
    <header className="gf__header">
      {isLogged ? (
        <button className="header__logout" onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
}

export default Header;
