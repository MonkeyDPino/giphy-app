import "./Modal.css";
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  return (
    <div className="modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal__content">
        <button onClick={onClose} className="modal__close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}
