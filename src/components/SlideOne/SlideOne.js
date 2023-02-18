import React from "react";
// Images
import BacteriaLongSlide1 from "./images/BacteriaLongSlide1.png";
import BlurLargeSlide1 from "./images/BlurLargeSlide1.png";
import BlurSmallSlide1 from "./images/BlurSmallSlide1.png";
import SpermOverSlide1 from "./images/SpermOverSlide1.png";
import SpermUnderSlide1 from "./images/SpermUnderSlide1.png";
import BacteriaPointyBottomSlide1 from "./images/BacteriaPointyBottomSlide1.png";
import BacteriaPointyTopSlide1 from "./images/BacteriaPointyTopSlide1.png";
import BacteriaSmoothBottomSlide1 from "./images/BacteriaSmoothBottomSlide1.png";
import BacteriaSmoothTopSlide1 from "./images/BacteriaSmoothTopSlide1.png";
// Styles
import "./SlideOne.css";
// Components
import PinkButton from "../PinkButton/PinkButton";

function SlideOne(props) {
  return (
    <div className="slide">
      <div className="slide-one">
        <div className="slide-one_particles slide-one_particles__under">
          <img
            className="slide-one_particle slide-one_particle__1"
            alt="Фоновая частица"
            src={BacteriaLongSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__2"
            alt="Фоновая частица"
            src={BlurLargeSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__3"
            alt="Фоновая частица"
            src={BlurSmallSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__4"
            alt="Фоновая частица"
            src={SpermUnderSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__6"
            alt="Фоновая частица"
            src={BacteriaPointyBottomSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__7"
            alt="Фоновая частица"
            src={BacteriaSmoothBottomSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__8"
            alt="Фоновая частица"
            src={BacteriaSmoothTopSlide1}
          />
        </div>
        <div className="slide-one_content">
          <h2 className="slide_key-text slide_key-text__default">Привет,</h2>
          <h1 className="slide_title-text slide_title-text__font-light slide_title-text__default-offset slide_title-text__font-size-big">
            Это <strong className="slide_title-text-bold">не</strong>{" "}
            коммерческое <span className="slide_title-text-end">задание</span>
            <PinkButton
              icon={{ type: "image", source: "arrow" }}
              text="Что дальше?"
              buttonFunction={props.scrollToSecondSlide}
            />
          </h1>
        </div>
        <div className="slide-one_particles slide-one_particles__over">
          <img
            className="slide-one_particle slide-one_particle__5"
            alt="Фоновая частица"
            src={SpermOverSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__9"
            alt="Фоновая частица"
            src={BacteriaPointyTopSlide1}
          />
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
