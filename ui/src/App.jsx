import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Scenario } from "./components/Scenario";
import { ChatInterface } from "./components/ChatInterface";
import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [selectedOption, setSelectedOption] = useState("Default");
  return (
    <>
      <Loader />
      <Leva collapsed hidden />
      <LandingPage />
      <ChatInterface
        personality={selectedOption}
        changePersonality={setSelectedOption}
      />
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 10 }}>
        <Scenario personality={selectedOption} />
      </Canvas>
    </>
  );
}

export default App;
