import React from "react";
// Images
import SpermHugeSlide2 from "./images/SpermHugeSlide2.png";
import SpermMediumBottomSlide2 from "./images/SpermMediumBottomSlide2.png";
import SpermMediumTopSlide2 from "./images/SpermMediumTopSlide2.png";
import SpermSmallBottomSlide2 from "./images/SpermSmallBottomSlide2.png";
import SpermSmallTopSlide2 from "./images/SpermSmallTopSlide2.png";
// Styles
import "./SlideTwo.css";
// Components
import ScrollableContainer from "../ScrollableContainer/ScrollableContainer";

function SlideTwo(props) {
  const [particlesAreShown, setParticlesAreShown] = React.useState(false);

  React.useEffect(() => {
    if (props.currentPage === 1) {
      setParticlesAreShown(false);
    } else if (props.currentPage >= 2 && !particlesAreShown) {
      setParticlesAreShown(true);
    }
  }, [props.currentPage, particlesAreShown]);

  return (
    <div className="slide">
      <div className="slide-two">
        {particlesAreShown && (
          <div className={"slide-two_background-particles"}>
            <img
              className={"slide-two_background-particle-1"}
              alt="Фоновая частица"
              src={SpermHugeSlide2}
            />
            <img
              className={"slide-two_background-particle-2"}
              alt="Фоновая частица"
              src={SpermMediumBottomSlide2}
            />
            <img
              className={"slide-two_background-particle-3"}
              alt="Фоновая частица"
              src={SpermMediumTopSlide2}
            />
            <img
              className={"slide-two_background-particle-4"}
              alt="Фоновая частица"
              src={SpermSmallBottomSlide2}
            />
            <img
              className={"slide-two_background-particle-5"}
              alt="Фоновая частица"
              src={SpermSmallTopSlide2}
            />
          </div>
        )}
        <div className="slide-two_content">
          <h2 className="slide_key-text slide_key-text__high">
            Текст сообщения
          </h2>
          <div className="slide-two_article">
            <ScrollableContainer
              disableScrollLock={props.disableScrollLock}
              enableScrollLock={props.enableScrollLock}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideTwo;
