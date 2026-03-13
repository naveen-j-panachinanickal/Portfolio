"use client";
import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { 
  Float, 
  Environment, 
  ScrollControls, 
  useScroll,
  MeshTransmissionMaterial,
  Points,
  PointMaterial
} from "@react-three/drei";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import * as THREE from "three";

function IridescentMonolith({ position, rotation, scale, color, i }) {
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.cos(t / 4) / 8 + rotation[0];
      mesh.current.rotation.y = Math.sin(t / 4) / 8 + rotation[1];
      mesh.current.position.y += Math.sin(t * 2 + position[0]) / 2000;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh
        ref={mesh}
        position={position}
        rotation={rotation}
        scale={scale}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[1, i % 2 === 0 ? 2 : 1.5, 0.4]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.05}
          anisotropy={0.2}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color={hovered ? color : "#ffffff"}
          attenuationDistance={1}
          attenuationColor="#ffffff"
          roughness={0.1}
          ior={1.2}
        />
      </mesh>
    </Float>
  );
}

function EtherealBackground() {
  const count = 1000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const points = useRef();

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#4285f4"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.2}
      />
    </Points>
  );
}

function SceneContent() {
  const { mouse, viewport } = useThree();
  const group = useRef();
  const scroll = useScroll();

  useFrame((state) => {
    if (group.current) {
      const x = (mouse.x * viewport.width) / 15;
      const y = (mouse.y * viewport.height) / 15;
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, x, 0.05);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, y, 0.05);
      
      const offset = scroll.offset;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, offset * Math.PI, 0.1);
    }
  });

  const googleColors = ["#4285f4", "#ea4335", "#fbbc05", "#34a853"];
  const monoliths = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8 - 2
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.4 + 0.3,
      color: googleColors[i % 4],
      i // passing index for height variation
    }));
  }, []);

  return (
    <group ref={group}>
      <EtherealBackground />
      {monoliths.map((props, i) => (
        <IridescentMonolith key={i} {...props} />
      ))}
      
      <Environment preset="apartment" />
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={0.5} />
        <Noise opacity={0.02} />
      </EffectComposer>
    </group>
  );
}

export default function AntigravityScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#ffffff]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true, stencil: false, depth: true }}
        dpr={[1, 2]}
      >
        <ScrollControls pages={4} damping={0.2}>
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
