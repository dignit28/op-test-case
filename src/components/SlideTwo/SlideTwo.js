import React from "react";
// Images
import SpermHugeSlide2 from "./images/SpermHugeSlide2.png";
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
          <div className="slide-two_background-particles">
            <img
              className="slide-two_background-particle-1"
              alt="Background particle"
              src={SpermHugeSlide2}
            />
          </div>
        )}
        <div className="slide-two_content">
          <h2 className="slide_key-text slide_key-text__high">Текст сообщения</h2>
          <div className="slide-two_article">
            <ScrollableContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideTwo;
