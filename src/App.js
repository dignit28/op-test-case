import React from "react";
// Styles
import "./App.css";
// Fonts
import "./fonts/fonts.css";
// Components
import SlideOne from "./components/SlideOne/SlideOne";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import SlideThree from "./components/SlideThree/SlideThree";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const sliderRef = React.useRef(null);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [touchStart, setTouchStart] = React.useState(null);
  const [scrollLock, setScrollLock] = React.useState(false);

  const enableScrollLock = () => {
    setScrollLock(true);
  };

  const disableScrollLock = () => {
    setScrollLock(false);
  };

  const handleTouchStart = (event) => {
    setTouchStart(event.changedTouches[0].clientX);
  };

  const handleScroll = (event) => {
    const pageRatio = event.target.scrollLeft / 1024;
    if (Number.isInteger(pageRatio)) {
      setCurrentPage(pageRatio + 1);
    } else {
      setCurrentPage(Math.ceil(pageRatio) + 0.5);
    }
  };

  const snapToEnd = () => {
    sliderRef.current.scrollTo({ left: 2048, behavior: "instant" });
  };

  const scrollToPage = (page) => {
    if (!scrollLock)
      sliderRef.current.scrollTo({
        left: 1024 * (Math.ceil(page) - 1),
        behavior: "smooth",
      });
  };

  const handleSwipe = (event) => {
    const touchEnd = event.changedTouches[0].clientX;
    let deltaPage;
    if (Math.abs(touchEnd - touchStart) < 200) {
      return;
    } else if (touchEnd - touchStart > 200) {
      deltaPage = -1;
    } else {
      deltaPage = 1;
    }
    const newPage = currentPage + deltaPage;
    if (newPage < 1 || newPage > 3) return;
    scrollToPage(newPage);
  };

  return (
    <div>
      <Header scrollToStart={() => scrollToPage(1)} />
      <main
        className="slider"
        onScroll={handleScroll}
        onTouchStart={(event) => handleTouchStart(event)}
        onTouchEnd={(event) => handleSwipe(event)}
        ref={sliderRef}
      >
        <SlideOne scrollToSecondSlide={() => scrollToPage(2)} />
        <SlideTwo
          enableScrollLock={enableScrollLock}
          disableScrollLock={disableScrollLock}
          currentPage={currentPage}
        />
        <SlideThree
          snapToEnd={snapToEnd}
          enableScrollLock={enableScrollLock}
          disableScrollLock={disableScrollLock}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
