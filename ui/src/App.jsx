import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Scenario } from "./components/Scenario";

function App() {
  return (
    <>
      <Loader />
      <Leva collapsed />
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 10 }}>
        <Scenario />
      </Canvas>
    </>
  );
}

export default App;
