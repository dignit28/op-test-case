import React from "react";
// Styles
import "./SlideThree.css";
// Components
import PinkButton from "../PinkButton/PinkButton";
import Modal from "./Modal/Modal";

function SlideThree(props) {
  const [modalIsActive, setModalIsActive] = React.useState(false);

  const openModal = () => {
    props.snapToEnd();
    setModalIsActive(true);
  };

  const closeModal = () => {
    setModalIsActive(false);
  };

  return (
    <div className="slide">
      <div className="slide-three">
        <PinkButton
          icon={{ type: "text", source: "+" }}
          text="Подробнее"
          buttonFunction={openModal}
        />
        {modalIsActive && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default SlideThree;
