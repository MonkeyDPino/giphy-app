import { useCallback } from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";

function Fav({ id }) {
  const { isLogged, addFavs, isFaved, deleteFavs } = useUser();
  const [, navigate] = useLocation();

  const handleClick = useCallback(() => {
    if (!isLogged) return navigate("/login");
    if (!isFaved(id)) return addFavs(id);
    deleteFavs(id);
  }, [id, isLogged, navigate, addFavs, deleteFavs, isFaved]);

  const [label, emoji] = isFaved(id) ? ["UnFav Gif", "❌"] : ["Fav Gif", "💗"];
  return (
    <button className="fav__button" onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}

export default Fav;
