"use client";

import { isDeveloper } from "@/lib/utils";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import { useParams } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import type { Points as PointsType } from "three";
import LoadingScreen from "../LoadingScreen";

const POINT_COUNT = 3333;

const StarBackground = ({ isDev }: { isDev: boolean }) => {
  const ref = useRef<PointsType>(null);

  // Generate sphere only once
  const sphere = useMemo(
    () =>
      inSphere(new Float32Array(POINT_COUNT * 3), {
        radius: 1.2,
      }) as Float32Array,
    [],
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta * 0.1;
    ref.current.rotation.y -= delta * 0.066;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3}>
      <PointMaterial
        transparent
        color={isDev ? "#ffffff" : "#000000"}
        size={0.003}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};
const StarsCanvas = () => {
  const { career } = useParams();
  const isDev = isDeveloper(career as string);
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen isDev={isDev} />}

      <div
        className={`fixed inset-0 z-[-1] h-full w-full ${
          isDev ? "bg-black" : "bg-[#fdfdfd]"
        }`}
      >
        <Canvas
          camera={{ position: [0, 0, 1] }}
          onCreated={() => {
            setLoaded(true);
          }}
        >
          <StarBackground isDev={isDev} />
        </Canvas>
      </div>
    </>
  );
};

export default StarsCanvas;
