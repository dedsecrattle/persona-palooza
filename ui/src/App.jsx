import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Scenario } from "./components/Scenario";
import { ChatInterface } from "./components/ChatInterface";
import { useState } from "react";
import LandingPage from "./components/LandingPage";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      <Loader />
      <Leva collapsed hidden />
      {showChat ? (
        <>
          {/* ChatInterface and 3D Canvas */}
          <ChatInterface />
          <Canvas shadows camera={{ position: [0, 0, 0], fov: 10 }}>
            <Scenario />
          </Canvas>
        </>
      ) : (
        <LandingPage setShowChat={setShowChat} />
      )}
    </>
  );
}

export default App;
