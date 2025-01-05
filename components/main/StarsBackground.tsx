"use client";

import { isDeveloper } from "@/lib/utils";
import { PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
// @ts-expect-error I don't care
import * as random from "maath/random/dist/maath-random.esm";
import { useParams } from "next/navigation";

const StarBackground = () => {
  const ref = useRef(null);

  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(2500 * 3), { radius: 1.2 });
  }, []);
  const career = useParams().career;

  useFrame((state, delta) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();

      // Define base rotation speed
      const baseXSpeed = 0.1;
      const baseYSpeed = 0.07;

      // Add slight directional drift
      const driftX = Math.sin(time * 0.1) * 0.02; // Slowly changes over time
      const driftY = Math.cos(time * 0.1) * 0.015;

      //  @ts-expect-error I don't care
      ref.current.rotation.x += (baseXSpeed + driftX) * delta;
      //  @ts-expect-error I don't care

      ref.current.rotation.y += (baseYSpeed + driftY) * delta;
    }
  });
  return (
    <group rotation={[4, 2, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={career === "developer" ? "#fff" : "#000000"}
          size={0.002}
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
