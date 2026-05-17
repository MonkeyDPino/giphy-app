import { useCallback, useState, useEffect, memo } from "react";
import useUser from "hooks/useUser";
import Modal from "components/Modal";
import Login from "components/Login";
import "./Fav.css";

const HeartFilled = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const HeartOutline = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);

const LoadingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

function Fav({ id }) {
  const { isLogged, addFavs, isFaved, deleteFavs } = useUser();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => {
    if (!isLogged) return setShowModal(true);
    if (loading) return;
    setLoading(true);
    if (!isFaved(id)) return addFavs(id, setLoading);
    return deleteFavs(id, setLoading);
  }, [id, isLogged, addFavs, deleteFavs, isFaved, loading]);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  useEffect(() => {
    if (isLogged && showModal) setShowModal(false);
  }, [isLogged, showModal, setShowModal]);

  const faved = isFaved(id);
  const label = faved ? "Remove from favorites" : "Add to favorites";

  return (
    <>
      <button
        className="fav__button"
        disabled={loading}
        onClick={handleClick}
        aria-label={label}
        title={label}
      >
        {loading ? (
          <span className="fav__icon fav__icon--loading"><LoadingIcon /></span>
        ) : faved ? (
          <span className="fav__icon fav__icon--faved"><HeartFilled /></span>
        ) : (
          <span className="fav__icon fav__icon--unfaved"><HeartOutline /></span>
        )}
      </button>
      {showModal && (
        <Modal onClose={closeModal}>
          <Login />
        </Modal>
      )}
    </>
  );
}

export default memo(Fav);
