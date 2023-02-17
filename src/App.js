import React from "react";
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

  const scrollToStart = () => {
    sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header scrollToStart={scrollToStart} />
      <main className="slider" onScroll={handleScroll} ref={sliderRef}>
        <SlideOne />
        <SlideTwo currentPage={currentPage} />
        <SlideThree snapToEnd={snapToEnd} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
