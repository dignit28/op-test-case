import "./App.css";
// Fonts
import "./fonts/fonts.css";
// Components
import PinkButton from "./components/PinkButton/PinkButton";

function App() {
  return (
    <div className="app">
      <PinkButton
        icon={{ type: "image", source: "arrow" }}
        text="Что дальше?"
      />
    </div>
  );
}

export default App;
