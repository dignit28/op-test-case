import React from "react";
// Styles
import "./Modal.css";
// Components
import OrderedList from "../../OrderedList/OrderedList";

const listData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "Faucibus pulvinar elementum integer enim",
  "Faucibus pulvinar elementum integer enim",
  "Mi bibendum neque egestas congue quisque egestas diam",
  "Venenatis lectus magna fringilla urna",
  "Venenatis lectus magna fringilla urna",
];

function Modal(props) {
  const onClickOutside = (event) => {
    const target = event.target;
    if (target.classList.contains("modal_focus-trap")) {
      props.closeModal();
    }
  };

  return (
    <div className="modal_focus-trap" onMouseDown={onClickOutside}>
      <div className="modal_main">
        <svg
          className="modal_close-button"
          onClick={props.closeModal}
          xmlns="http://www.w3.org/2000/svg"
          width="35px"
          height="35px"
        >
          <path
            transform="matrix(0.5 0 0 0.5 0 0) translate(8 -6) rotate(45)"
            fillRule="evenodd"
            stroke="rgb(0, 0, 0)"
            strokeWidth="6px"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
            d="M92.0,8.999 L2.999,8.999 "
          />
          <path
            transform="matrix(0.5 0 0 0.5 0 0) translate(62 -6) rotate(45)"
            fillRule="evenodd"
            stroke="rgb(0, 0, 0)"
            strokeWidth="6px"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
            d="M8.999,2.999 L8.999,92.0 "
          />
        </svg>
        <h2 className="modal_key-text">Преимущества</h2>
        <h1 className="modal_title-text">
          Brend<strong className="modal_title-text-bold">XY</strong>
        </h1>
        <OrderedList data={listData} />
      </div>
    </div>
  );
}

export default Modal;
