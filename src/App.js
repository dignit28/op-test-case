import "./App.css";
// Fonts
import "./fonts/fonts.css";
// Components
import SlideOne from "./components/SlideOne/SlideOne";
import SlideTwo from "./components/SlideTwo/SlideTwo";
import SlideThree from "./components/SlideThree/SlideThree";

function App() {
  return (
    <main className="slider">
      <SlideOne />
      <SlideTwo />
      <SlideThree />
    </main>
  );
}

export default App;
