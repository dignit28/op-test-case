import React from "react";
// Styles
import "./PinkButton.css";
// Icons
import arrowIcon from "./icons/arrowIcon.png"

const icons = {
  arrow: arrowIcon,
}

function PinkButton(props) {
  const [iconData] = React.useState(props.icon);

  const [textData] = React.useState(props.text);

  return (
    <div className="pink-button">
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
