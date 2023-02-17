import React from "react";
// Styles
import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header_home-button" onClick={props.scrollToStart}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="21px">
          <path
            transform="matrix(0.5 0 0 0.5 0 0)"
            fillRule="evenodd"
            stroke="rgb(40, 40, 40)"
            strokeWidth="2px"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="rgb(40, 40, 40)"
            d="M43.187,21.349 L23.430,2.808 L3.119,21.351 L2.647,20.854 L23.196,2.82 C23.331,1.954 23.539,1.954 23.671,2.85 L43.666,20.856 L43.187,21.349 ZM8.871,37.758 L18.741,37.758 L18.741,27.912 C18.741,27.822 18.778,27.732 18.840,27.667 C18.903,27.603 18.993,27.567 19.83,27.567 L27.598,27.567 C27.688,27.567 27.775,27.603 27.839,27.667 C27.903,27.732 27.938,27.822 27.938,27.912 L27.938,37.758 L37.994,37.758 L37.994,21.196 L38.676,21.196 L38.676,38.103 C38.676,38.194 38.639,38.282 38.575,38.346 C38.514,38.410 38.424,38.446 38.334,38.446 L27.598,38.446 C27.509,38.446 27.419,38.410 27.355,38.346 C27.292,38.282 27.256,38.194 27.256,38.103 L27.256,28.255 L19.423,28.255 L19.423,38.103 C19.423,38.194 19.387,38.282 19.323,38.346 C19.260,38.410 19.172,38.446 19.83,38.446 L8.531,38.446 C8.439,38.446 8.351,38.410 8.288,38.346 C8.224,38.282 8.189,38.194 8.189,38.103 L8.189,21.196 L8.871,21.196 L8.871,37.758 Z"
          />
        </svg>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="3px" height="27px">
        <path
          transform="matrix(0.5 0 0 0.5 0 0)"
          fillRule="evenodd"
          stroke="rgb(40, 40, 40)"
          strokeWidth="2px"
          strokeLinecap="round"
          strokeLinejoin="miter"
          fill="rgb(231, 235, 239)"
          d="M0.999,50.999 L0.999,1.999 "
        />
      </svg>
      <span className="header_title">Project</span>
    </header>
  );
}

export default Header;
