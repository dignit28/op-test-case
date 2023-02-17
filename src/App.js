import React from "react";
import "./App.css";
// Fonts
import "./fonts/fonts.css";
// Components
import SlideOne from "./components/SlideOne/SlideOne";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import SlideThree from "./components/SlideThree/SlideThree";

function App() {
  const sliderRef = React.useRef(null);
  const [scrollX, setScrollX] = React.useState(0);

  const handleScroll = (event) => {
    setScrollX(event.target.scrollLeft);
  };

  const snapToEnd = () => {
    sliderRef.current.scrollTo({ left: 2048, behavior: "instant" });
  };

  return (
    <main className="slider" onScroll={handleScroll} ref={sliderRef}>
      <SlideOne />
      <SlideTwo />
      <SlideThree snapToEnd={snapToEnd} />
    </main>
  );
}

export default App;
