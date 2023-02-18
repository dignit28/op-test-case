import React from "react";
//Styles
import "./OrderedList.css";

function OrderedList(props) {
  const [currentPage, _setCurrentPage] = React.useState(1);
  const [currentElements, setCurrentElements] = React.useState(
    props.data.slice(0, 3)
  );
  const [fadeInRetrigger, setFadeInRetrigger] = React.useState(false);

  const totalPages = Math.ceil(props.data.length / 3);

  const setCurrentPage = (newPage) => {
    setCurrentElements(props.data.slice(3 * (newPage - 1), 3 * newPage));
    _setCurrentPage(newPage);
  };

  const handlePageBack = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setFadeInRetrigger((prevFadeInRetrigger) => !prevFadeInRetrigger);
    }
  };

  const handlePageForward = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
      setFadeInRetrigger((prevFadeInRetrigger) => !prevFadeInRetrigger);
    }
  };

  const itemElements = currentElements.map((item, index) => {
    const itemNumber = index + 1 + 3 * (currentPage - 1);
    const itemNumberText = (itemNumber < 10 ? "0" : "") + itemNumber;
    return (
      <li key={"item" + index} className={"ordered-list_item"}>
        <span className="ordered-list_item-number">{itemNumberText}</span>
        <br></br>
        <span className="ordered-list_item-value">{item}</span>
      </li>
    );
  });

  let navigationPointElements = [];

  for (let count = 0; count < totalPages; count++) {
    navigationPointElements.push(
      <div
        key={"point" + count}
        className={
          "ordered-list_navigation-point " +
          (count + 1 === currentPage
            ? "ordered-list_navigation-point__active"
            : "")
        }
      ></div>
    );
  }

  return (
    <div className="ordered-list">
      <ul className="ordered-list_item-container">
        {fadeInRetrigger ? itemElements : ""}
        {!fadeInRetrigger ? itemElements : ""}
      </ul>
      <nav className="ordered-list_navigation-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10px"
          height="16px"
          onClick={handlePageBack}
        >
          <path
            transform="matrix(0.42 0 0 0.42 0 0)"
            fillRule="evenodd"
            stroke="rgb(0, 0, 0)"
            strokeWidth="4px"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
            d="M21.999,35.11 L5.903,19.998 L21.999,4.986 "
          />
        </svg>
        <div className="ordered-list_navigation-point-container">
          {navigationPointElements}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10px"
          height="16px"
          onClick={handlePageForward}
        >
          <path
            transform="matrix(0.42 0 0 0.42 0 0)"
            fillRule="evenodd"
            stroke="rgb(0, 0, 0)"
            strokeWidth="4px"
            strokeLinecap="round"
            strokeLinejoin="miter"
            fill="none"
            d="M4.981,4.848 L21.172,19.985 L4.981,35.122 "
          />
        </svg>
      </nav>
    </div>
  );
}

export default OrderedList;
