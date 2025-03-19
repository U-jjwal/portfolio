import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const Can = () => {
  let tex = useTexture("/island.glb"); 
  let can = useRef(null);
 
  const { viewport } = useThree();
  const [mouse, setMouse] = useState({x: 0, y: 0});
  let baseRotationY = useRef(0);

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1; 
    const y = (event.clientY / window.innerHeight) * 2 - 1; 
    setMouse({ x, y });
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
   
    if (can.current) {
     
      baseRotationY.current -= delta * 0.6;
      
      // 🎯 Smoothly Tilt Based on Mouse Movement
      const tiltX = THREE.MathUtils.lerp(can.current.rotation.x, mouse.y * 0.3, 0.1);
      const tiltY = THREE.MathUtils.lerp(baseRotationY.current, -mouse.x * 0.3, 0.1);

      can.current.rotation.set(tiltX, tiltY, 0);
  }


  });

  return (
  

    <group rotation={[0.5, 1, 0]}>
      <mesh ref={can}> 
        <cylinderGeometry args={[1, 1, 1, 20, 30, true]} /> 
        <meshStandardMaterial  map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
 
  );
};

export default Can;