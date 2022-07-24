import { useCallback } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css"

function Fav({ id }) {
  const { isLogged } = useUser();
  const [, navigate] = useLocation();

  const handleClick = useCallback(() => {
    if (!isLogged) return navigate("/login");
    alert(id);
  }, [id]);

  return (
    <button className="fav__button" onClick={handleClick}>
      <span aria-label="Fav Gif" role="img">
        ❤
      </span>
    </button>
  );
}

export default Fav;
