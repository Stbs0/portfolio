"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import { useParams } from "next/navigation";
import { isDeveloper } from "@/lib/utils";

const StarBackground = (props: any) => {
  const ref: any = useRef(undefined);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );
  const career = useParams().career;

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group  rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}>
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

const StarsCanvas: React.FC<{}> = () => {
  const career = useParams().career;
  
  return (
    <div
      className={`w-full h-auto fixed inset-0 ${
        isDeveloper(career as string) ? "bg-black " : "bg-[#fdfdfd] "
      }   bg-[url('/LooperGroup2.png')] 
            bg-no-repeat   z-[-1] 
      } z-[-2] `}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
