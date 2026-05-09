import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 180;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 5.5;
      array[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      array[i * 3 + 2] = (Math.random() - 0.5) * 2;
    }

    return array;
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    pointsRef.current.rotation.x =
      Math.sin(clock.getElapsedTime() * 0.12) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#14b8a6"
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function AmbientCanvas() {
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur md:h-[420px] dark:border-slate-800/70 dark:bg-slate-900/40 dark:shadow-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.10),transparent_55%)] dark:bg-[radial-gradient(circle_at_center,rgba(100,255,218,0.08),transparent_55%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] dark:bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)]" />

      <Canvas camera={{ position: [0, 0, 4], fov: 42 }}>
        <ambientLight intensity={0.35} />
        <Particles />
      </Canvas>
    </div>
  );
}
