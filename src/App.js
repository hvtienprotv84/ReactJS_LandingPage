import "./App.css";
import InformationComponent from "./components/informarmation.component";
import MainImageComponent from "./components/main-image.component";

function App() {
  return (
    <div className="App">
      <div className="left-container">
        <MainImageComponent />
      </div>
      <div className="divider"></div>
      <div className="right-container">
        <InformationComponent />
      </div>
    </div>
  );
}

export default App;
