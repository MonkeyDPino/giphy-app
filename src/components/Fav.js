import { useCallback, useState, useEffect } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";
import "./Fav.css";

function Fav({ id }) {
  const { isLogged, addFavs, isFaved, deleteFavs } = useUser();
  const [showModal, setShowModal] = useState(false);

  const handleClick = useCallback(() => {
    if (!isLogged) return setShowModal(true);
    if (!isFaved(id)) return addFavs(id);
    deleteFavs(id);
  }, [id, isLogged, addFavs, deleteFavs, isFaved]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    if(isLogged && showModal)setShowModal(false);
  },[isLogged,showModal,setShowModal]);

  const [label, emoji] = isFaved(id) ? ["UnFav Gif", "❌"] : ["Fav Gif", "💗"];
  return (
    <>
      <button className="fav__button" onClick={handleClick}>
        <span aria-label={label} role="img">
          {emoji}
        </span>
      </button>
      {showModal && <Modal onClose={closeModal}><Login/></Modal>}
    </>
  );
}

export default Fav;
