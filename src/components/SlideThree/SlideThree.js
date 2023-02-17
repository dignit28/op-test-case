import React from "react";
// Images
import Bottle from "./images/Bottle.png";
import CalendarIcon from "./images/CalendarIcon.png";
import FoodIcon from "./images/FoodIcon.png";
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
        <div className="slide-three_content">
          <h2 className="slide_key-text slide_key-text__right">
            Ключевое сообщение
          </h2>
          <h1 className="slide_title-text slide_title-text__font-regular slide_title-text__large-offset slide_title-text__font-size-medium">
            Brend<strong className="slide_title-text-bold">XY</strong>
          </h1>
          <div className="slide-three_keynotes-outer-wrapper">
            <div className="slide-three_keynote">
              <span className="slide-three_keynote-text slide-three_keynote__large-offset">
                <img
                  className="slide-three_keynote-icon slide-three_keynote-icon__tall"
                  alt="Иконка еды"
                  src={FoodIcon}
                />
                Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
                vestibulum lorem sed risus ultricies
              </span>
            </div>
            <div className="slide-three_keynotes-inner-wrapper">
              <div className="slide-three_keynote slide-three_keynote__default-offset">
                <span className="slide-three_keynote-text">
                <img
                  className="slide-three_keynote-icon slide-three_keynote-icon__short"
                  alt="Иконка календаря"
                  src={CalendarIcon}
                />
                  A arcu cursus vitae
                </span>
              </div>
              <div className="slide-three_flex-button-wrapper">
                <PinkButton
                  icon={{ type: "text", source: "+" }}
                  text="Подробнее"
                  buttonFunction={openModal}
                />
              </div>
            </div>
          </div>
        </div>
        {modalIsActive && <Modal closeModal={closeModal} />}
        <div className="slide-three_particles">
          <img
            className="slide-three_particle slide-three_particle__1"
            alt="Баллончик"
            src={Bottle}
          />
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
