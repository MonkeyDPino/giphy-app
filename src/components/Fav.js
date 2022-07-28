import { useCallback, useState, useEffect } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";
import "./Fav.css";

function Fav({ id }) {
  const { isLogged, addFavs, isFaved, deleteFavs } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (!isLogged) return setShowModal(true);
    setLoading(true);
    if (!isFaved(id)) return addFavs(id,setLoading);
    deleteFavs(id,setLoading);
  }, [id, isLogged, addFavs, deleteFavs, isFaved]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    if (isLogged && showModal) setShowModal(false);
  }, [isLogged, showModal, setShowModal]);

  const [label, emoji] = isFaved(id) ? ["UnFav Gif", "❌"] : ["Fav Gif", "💗"];
  return (
    <>
      <button className="fav__button" disabled={loading} onClick={handleClick}>
        <span aria-label={label} role="img">
          {loading? "🕖":emoji}
        </span>
      </button>
      {showModal && (
        <Modal onClose={closeModal}>
          <Login />
        </Modal>
      )}
    </>
  );
}

export default Fav;
