import React from "react";
// Styles
import "./SlideTwo.css";
// Images
import SpermHugeSlide2 from "./images/SpermHugeSlide2.png";
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
          <div className="slide-two_background-particles">
            <img
              className="slide-two_background-particle-1"
              alt="Background particle"
              src={SpermHugeSlide2}
            />
          </div>
        )}
        <ScrollableContainer />
      </div>
    </div>
  );
}

export default SlideTwo;
