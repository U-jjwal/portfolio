import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei";
import Can from "./Can";
import { Bloom, EffectComposer } from "@react-three/postprocessing";


const MyCanvas = () => {

 

  return (
    <div className="relative  ">

    <div  className="cv h-[45vw] w-[50vw] absolute  ">

    <ThreeCanvas  flat camera={{ fov: 30 }}> 
      <ambientLight />
  

      <Can />
    
     
      <EffectComposer>
        <Bloom  
           mipmapBlur
           intensity={0} 
           luminanceThreshold={1}
           luminanceSmoothing={1} 
           />
      </EffectComposer>
    </ThreeCanvas>
           </div>
    
    </div>
  );
};

export default MyCanvas;
