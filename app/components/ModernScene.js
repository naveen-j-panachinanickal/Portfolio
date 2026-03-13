"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, useScroll, Float, Stars } from "@react-three/drei";
import * as THREE from "three";
import { EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";

function Starfield({ count = 3000 }) {
  const points = useRef();
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      const r = 0.5 + Math.random() * 0.5;
      colors[i * 3] = r * 0.2;
      colors[i * 3 + 1] = r * 0.8;
      colors[i * 3 + 2] = r;
    }
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    points.current.rotation.y = t * 0.05;
    points.current.rotation.x = t * 0.02;
    
    // Mouse Parallax
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, state.mouse.x * 2, 0.05);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, state.mouse.y * 2, 0.05);
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function MovingGlow() {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, state.mouse.x * 10, 0.05);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, state.mouse.y * 10, 0.05);
  });

  return (
    <mesh ref={mesh} position={[0, 0, -5]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.05} />
    </mesh>
  );
}

function SceneContent() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <Starfield />
      <MovingGlow />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
    </>
  );
}

export default function ModernScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }}>
        <SceneContent />
        <EffectComposer multisampling={8}>
          <Bloom 
            intensity={1.5} 
            luminanceThreshold={0.1} 
            luminanceSmoothing={0.9} 
          />
          <ChromaticAberration offset={[0.002, 0.002]} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
