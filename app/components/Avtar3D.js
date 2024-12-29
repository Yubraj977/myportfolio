"use client";
import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const Avatar3D = () => {
  const meshRef = useRef(null); // Ensure initial value is null

//   useEffect(() => {
//     const textureLoader = new THREE.TextureLoader();

//     const diffuseMap = textureLoader.load('models/gltf/LeePerrySmith/Map-COL.jpg');
//     const specularMap = textureLoader.load('models/gltf/LeePerrySmith/Map-SPEC.jpg');
//     const normalMap = textureLoader.load('models/gltf/LeePerrySmith/Infinite-Level_02_Tangent_SmoothUV.jpg');

//     const material = new THREE.MeshPhongMaterial({
//       color: 0xefefef,
//       specular: 0x222222,
//       shininess: 35,
//       map: diffuseMap,
//       specularMap: specularMap,
//       normalMap: normalMap,
//       normalScale: new THREE.Vector2(0.8, 0.8),
//     });

//     const loader = new THREE.GLTFLoader();
//     loader.load('models/LeePerrySmith.glb', (gltf) => {
//       const geometry = gltf.scene.children[0].geometry;
//       const mesh = new THREE.Mesh(geometry, material);
//       mesh.position.y = -0.5;
//       if (meshRef.current) {
//         meshRef.current.add(mesh); // Make sure meshRef is available before adding the mesh
//       }
//     });

//   }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 6]} intensity={30} />
      <directionalLight position={[1, -0.5, -1]} intensity={3} />
      <OrbitControls />
      <group ref={meshRef} />
    </Canvas>
  
  );
};

export default Avatar3D;