import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import { random } from "maath";

const Stars = () => {
  const pointsRef = useRef();

  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

  useFrame((state, delta) => {
    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          size={0.002}
          color="#F272c8"
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null} />
        <Stars />

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
