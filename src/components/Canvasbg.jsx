import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";

const IslandModel = ({ setIsLoaded }) => {
  const { scene, animations } = useGLTF("/island.glb", true);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.setEffectiveTimeScale(0.2);
        action.play();
      });
    }
    setTimeout(() => setIsLoaded(), 1000); // Added slight delay to ensure smooth transition
  }, [actions, setIsLoaded]);

  return <primitive object={scene} scale={1.5} position={[0, -2, 0]} />;
};

const CanvasBackground = ({ setIsLoaded }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 bg-[#000000]">
      <Canvas camera={{ fov: 100 }} onCreated={() => setIsLoaded()}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <IslandModel setIsLoaded={setIsLoaded} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.1} />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
