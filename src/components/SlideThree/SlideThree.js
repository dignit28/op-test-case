import React from "react";
// Images
import Bottle from "./images/Bottle.png";
import CalendarIcon from "./images/CalendarIcon.png";
import FoodIcon from "./images/FoodIcon.png";
import BlueBubbleHighestSlide3 from "./images/BlueBubbleHighestSlide3.png";
import BlueBubbleHighSlide3 from "./images/BlueBubbleHighSlide3.png";
import BlueBubbleLowestSlide3 from "./images/BlueBubbleLowestSlide3.png";
import BlueBubbleLowSlide3 from "./images/BlueBubbleLowSlide3.png";
import BlueBubbleMiddleSlide3 from "./images/BlueBubbleMiddleSlide3.png";
import PinkBubbleHighSlide3 from "./images/PinkBubbleHighSlide3.png";
import PinkBubbleLowSlide3 from "./images/PinkBubbleLowSlide3.png";
import PinkBubbleMiddleSlide3 from "./images/PinkBubbleMiddleSlide3.png";
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
    props.enableScrollLock();
  };

  const closeModal = () => {
    setModalIsActive(false);
    props.disableScrollLock();
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
            className="slide-three_particle slide-three_particle__2"
            alt="Фоновая частица"
            src={BlueBubbleHighestSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__3"
            alt="Фоновая частица"
            src={PinkBubbleHighSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__4"
            alt="Фоновая частица"
            src={PinkBubbleMiddleSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__5"
            alt="Фоновая частица"
            src={BlueBubbleLowSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__1"
            alt="Баллончик"
            src={Bottle}
          />
          <img
            className="slide-three_particle slide-three_particle__6"
            alt="Фоновая частица"
            src={BlueBubbleHighSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__7"
            alt="Фоновая частица"
            src={BlueBubbleMiddleSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__8"
            alt="Фоновая частица"
            src={PinkBubbleLowSlide3}
          />
          <img
            className="slide-three_particle slide-three_particle__9"
            alt="Фоновая частица"
            src={BlueBubbleLowestSlide3}
          />
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
