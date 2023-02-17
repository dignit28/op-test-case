import React from "react";
// Styles
import "./SlideOne.css";
// Components
import PinkButton from "../PinkButton/PinkButton";

function SlideOne(props) {
  return (
    <div className="slide">
      <div className="slide-one">
        <PinkButton
          icon={{ type: "image", source: "arrow" }}
          text="Что дальше?"
          buttonFunction={props.scrollToSecondSlide}
        />
      </div>
    </div>
  );
}

export default SlideOne;
