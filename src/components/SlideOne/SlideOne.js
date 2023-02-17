import React from "react";
// Images
import BacteriaLongSlide1 from "./images/BacteriaLongSlide1.png";
import BlurLargeSlide1 from "./images/BlurLargeSlide1.png";
import BlurSmallSlide1 from "./images/BlurSmallSlide1.png";
import SpermOverSlide1 from "./images/SpermOverSlide1.png";
import SpermUnderSlide1 from "./images/SpermUnderSlide1.png";
// Styles
import "./SlideOne.css";
// Components
import PinkButton from "../PinkButton/PinkButton";

function SlideOne(props) {
  return (
    <div className="slide">
      <div className="slide-one">
        <div className="slide-one_particles">
          <img
            className="slide-one_particle slide-one_particle__1"
            alt="Background particle"
            src={BacteriaLongSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__2"
            alt="Background particle"
            src={BlurLargeSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__3"
            alt="Background particle"
            src={BlurSmallSlide1}
          />
          <img
            className="slide-one_particle slide-one_particle__4"
            alt="Background particle"
            src={SpermUnderSlide1}
          />
        </div>
        <PinkButton
          icon={{ type: "image", source: "arrow" }}
          text="Что дальше?"
          buttonFunction={props.scrollToSecondSlide}
        />
        <div className="slide-one_particles">
          <img
            className="slide-one_particle slide-one_particle__5"
            alt="Background particle"
            src={SpermOverSlide1}
          />
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
