import React from "react";
// Styles
import "./Modal.css";

function Modal(props) {
  const onClickOutside = (event) => {
    const target = event.target;
    if (target.classList.contains("modal_focus-trap")) {
      props.closeModal();
    }
  };

  return (
    <div
      className="modal_focus-trap"
      onMouseDown={onClickOutside}
    >
      <div className="modal_main"></div>
    </div>
  );
}

export default Modal;
