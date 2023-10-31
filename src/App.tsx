import "./App.scss";
import ThreeSample from "./pages/ThreeSample";
import ThreeFiber from "./pages/ThreeFiber";
import Scene from "./soccer/Scene";
import { Cube } from "./pages/Cube";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene />
    </div>
  );
};

export default App;
