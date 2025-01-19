import { CameraControls, Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import mapping from "../constants/avatarMapping.jsx";
import { useSpeech } from "../hooks/useSpeech.jsx";

export const Scenario = () => {
  const cameraControls = useRef();
  const { personality } = useSpeech();
  useEffect(() => {
    cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
  }, []);
  return (
    <>
      <CameraControls ref={cameraControls} />
      <Environment preset="sunset" />
      {mapping[personality]}
    </>
  );
};
