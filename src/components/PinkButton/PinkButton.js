import React from "react";
// Icons
import arrowIcon from "./icons/arrowIcon.png";
// Styles
import "./PinkButton.css";

const icons = {
  arrow: arrowIcon,
};

function PinkButton(props) {
  const [iconData] = React.useState(props.icon);

  const [textData] = React.useState(props.text);

  const handleClick = () => {
    props.buttonFunction();
  };

  return (
    <div className="pink-button" onClick={handleClick}>
      <div className="pink-button_icon-container">
        {iconData.type === "text" ? (
          <span className="pink-button_icon">{iconData.source}</span>
        ) : (
          <img
            className="pink-button_icon"
            alt="Button icon"
            src={icons[iconData.source]}
          ></img>
        )}
      </div>
      <span className="pink-button_text">{textData}</span>
    </div>
  );
}

export default PinkButton;
