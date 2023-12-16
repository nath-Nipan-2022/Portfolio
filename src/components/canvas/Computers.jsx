/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from "react";

import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import CanvasLoader from "../Loader";

const Computer = ({ isMobile }) => {
  const computer = useLoader(GLTFLoader, "./desktop_pc/scene.glb");

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.5 : 0.6}
      position={isMobile ? [0, -2.5, -0.85] : [0, -3.1, -1.1]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[-12.7, 9.6, -2.6]} intensity={2} />
        <ambientLight intensity={3} position={[-0.6, 1.1, 2.75]} />
        <hemisphereLight
          intensity={2.16}
          groundColor="black"
          position={[0, 10, 0]}
        />
        <pointLight intensity={2} position={[-0.1, -1.25, 0]} />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
