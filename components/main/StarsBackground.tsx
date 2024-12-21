"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-expect-error I don't care
import * as random from "maath/random/dist/maath-random.esm";
import { useParams } from "next/navigation";
import { isDeveloper } from "@/lib/utils";

const StarBackground = () => {
  const ref = useRef(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );
  const career = useParams().career;

  useFrame((state, delta) => {
    if (!ref.current) return;
    // @ts-expect-error I don't care
    ref.current.rotation.x -= delta / 10;
    // @ts-expect-error I don't care
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        >
        <PointMaterial
          transparent
          color={career === "developer" ? "#fff" : "#000000"}
          size={0.005}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const career = useParams().career;
  
  return (
    <div
      className={`w-full h-auto fixed inset-0 ${
        isDeveloper(career as string) ? "bg-black " : "bg-[#fdfdfd]"
      } z-[-2]
       `}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
