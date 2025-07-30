"use client";

import { isDeveloper } from "@/lib/utils";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import * as THREE from "three";
const pointCount = 3333;
const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);
  const career = useParams().career;
  const [sphere] = useState(
    () =>
      inSphere(new Float32Array(pointCount * 3), {
        radius: 1.2,
      }) as Float32Array,
  );

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color={career === "developer" ? "#fff" : "#000000"}
        size={0.003}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  const career = useParams().career;

  return (
    <div
      className={`fixed inset-0 h-auto w-full ${
        isDeveloper(career as string) ? "bg-black" : "bg-[#fdfdfd]"
      } z-[-1]`}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
       
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
