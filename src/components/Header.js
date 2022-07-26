import { Link, useRoute } from "wouter";
import "./Header.css";
import { useMemo } from "react";
import useUser from "hooks/useUser";

function Header() {
  const { isLogged, logout } = useUser();
  const [match] = useRoute("/login");

  const content = useMemo(() => {
    return !match ? (
      isLogged ? (
        <button className="header__logout" onClick={logout}>
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )
    ) : null;
  },[match, isLogged, logout]);

  return <header className="gf__header">{content}</header>;
}

export default Header;
