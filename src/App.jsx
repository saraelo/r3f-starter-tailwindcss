import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./index.css";
import { Experience } from "./components/Experience";

const App = () => {
  return (
    <Canvas
      camera={{
        position: [3, 3, 3],
      }}
    >
      <OrbitControls />

      <Experience />
    </Canvas>
  );
};

export default App;
