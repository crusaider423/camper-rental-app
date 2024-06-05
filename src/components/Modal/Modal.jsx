import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ isOpen, onClose, children, onClickOutside }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClickOutside}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onClickOutside: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
