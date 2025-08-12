"use client";
import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei"; // optional for testing

function Head({ eyeOffset = 0.35, eyeY = 0.15, pupilRange = 0.08 }) {
  const group = useRef();
  const leftPupil = useRef();
  const rightPupil = useRef();

  const [target, setTarget] = useState(new THREE.Vector2(0, 0));

  useFrame(() => {
    if (!group.current) return;

    // Turn head toward cursor
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      -target.x * 0.5,
      0.12
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      target.y * 0.35,
      0.12
    );

    // Pupils track cursor
    leftPupil.current.position.x = THREE.MathUtils.lerp(
      leftPupil.current.position.x,
      -eyeOffset + target.x * pupilRange,
      0.25
    );
    leftPupil.current.position.y = THREE.MathUtils.lerp(
      leftPupil.current.position.y,
      eyeY + target.y * pupilRange,
      0.25
    );

    rightPupil.current.position.x = THREE.MathUtils.lerp(
      rightPupil.current.position.x,
      eyeOffset + target.x * pupilRange,
      0.25
    );
    rightPupil.current.position.y = THREE.MathUtils.lerp(
      rightPupil.current.position.y,
      eyeY + target.y * pupilRange,
      0.25
    );
  });

  const materials = useMemo(
    () => ({
      skin: new THREE.MeshStandardMaterial({
        color: "#d1d5db",
        roughness: 0.8,
        metalness: 0.1,
      }),
      eyeWhite: new THREE.MeshStandardMaterial({
        color: "white",
        roughness: 0.6,
      }),
      pupil: new THREE.MeshStandardMaterial({ color: "black", roughness: 1 }),
    }),
    []
  );

  const onPointerMove = (e) => {
    const { x, y } = e.pointer; // R3F normalized coords in [-1..1]
    setTarget(
      new THREE.Vector2(
        THREE.MathUtils.clamp(x, -0.9, 0.9),
        THREE.MathUtils.clamp(y, -0.9, 0.9)
      )
    );
  };

  return (
    <group
      ref={group}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setTarget(new THREE.Vector2(0, 0))}
    >
      {/* Head */}
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <primitive object={materials.skin} attach="material" />
      </mesh>

      {/* Eye whites */}
      <mesh position={[-eyeOffset, eyeY, 0.95]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <primitive object={materials.eyeWhite} attach="material" />
      </mesh>
      <mesh position={[eyeOffset, eyeY, 0.95]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <primitive object={materials.eyeWhite} attach="material" />
      </mesh>

      {/* Pupils */}
      <mesh ref={leftPupil} position={[-eyeOffset, eyeY, 0.92]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <primitive object={materials.pupil} attach="material" />
      </mesh>
      <mesh ref={rightPupil} position={[eyeOffset, eyeY, 0.92]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <primitive object={materials.pupil} attach="material" />
      </mesh>
    </group>
  );
}

export default function Avatar3DCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3], fov: 42 }}
      style={{ width: 240, height: 240, borderRadius: 9999 }}
      className="rounded-full border-2 border-slate-900 shadow-xl overflow-hidden"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1} />
      <directionalLight position={[-4, -2, 2]} intensity={0.3} />
      <Head />
      {/* <OrbitControls enableZoom={false} /> */}
    </Canvas>
  );
}