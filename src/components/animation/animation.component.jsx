import React from "react";
import { useRef, useEffect, useContext } from "react";
import { PageContext } from "../../contexts/pageContext/page.context";
import "./animation.style.scss";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
function Animation() {
  const { color } = useContext(PageContext);
  // WINDOW EVENETS, MOUSE COORDINATES
  let mouse = new THREE.Vector2(),
    INTERSECTED;
  useEffect(() => {
    const onMouseMove = (event) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const onDocumentTouchStart = (event) => {
      if (event.touches.length == 1) {
        mouse.x =
          (event.touches[0].pageX - window.innerWidth / 2) * cameraModifier;
        mouse.y =
          (event.touches[0].pageY - window.innerHeight / 2) * cameraModifier;
      }
    };

    const onDocumentTouchMove = (event) => {
      if (event.touches.length == 1) {
        mouse.x =
          (event.touches[0].pageX - window.innerWidth / 2) * cameraModifier;
        mouse.y =
          (event.touches[0].pageY - window.innerHeight / 2) * cameraModifier;
      }
    };

    window.addEventListener("mousemove", onMouseMove, false);
    window.addEventListener("touchstart", onDocumentTouchStart, false);
    window.addEventListener("touchmove", onDocumentTouchMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onDocumentTouchStart);
      window.removeEventListener("touchmove", onDocumentTouchMove);
    };
  }, [color]);
  // COLORS
  let firstColor = 0xf3d3bd; // cold
  let fifthColor = 0x5e5e5e; // light gray
  // HELPERS for mousemove rotation
  let cameraModifier = 0.0005; // camera speed
  let cameraRange = 0.3;
  // MAIN OBJECT -> DEER
  const Deer = () => {
    const material = new THREE.MeshPhongMaterial({ color: firstColor });
    const obj = useLoader(OBJLoader, "deer.obj", (loader) => {});
    obj.traverse((child) => {
      if (child instanceof Mesh) {
        child.material = material;
      }
    });
    return (
      <primitive
        object={obj}
        scale={[0.008, 0.008, 0.008]}
        rotation-y={-1.5707963268}
        position={[0, -7.5, -2.5]}
      />
    );
  };
  // PARTICLES
  const particlesRef = useRef();
  const particleMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shininess: 1,
    reflectivity: 0.5,
  });
  const particleGeometry = new THREE.CircleGeometry(0.3, 3);
  const particleMathRand = (num = 8) => {
    return -Math.random() * num + Math.random() * num;
  };
  const particleSpace = 15;
  const amountOfParticles = 400;
  const particlesArray = [];
  for (let i = 0; i < amountOfParticles; i++) {
    particlesArray.push(
      <mesh
        key={i}
        geometry={particleGeometry}
        material={particleMaterial}
        position={[
          particleMathRand(particleSpace),
          particleMathRand(particleSpace),
          particleMathRand(particleSpace),
        ]}
        rotation={[particleMathRand(), particleMathRand(), particleMathRand()]}
      />
    );
  }
  // ANIMATE
  const Animate = () => {
    useFrame((state) => {
      state.scene.background = new THREE.Color(color);
      state.scene.fog = new THREE.FogExp2(color, 0.15);
      state.scene.rotation.y -=
        (mouse.x * 8 - state.camera.rotation.y) * cameraModifier;
      state.scene.rotation.x -=
        (mouse.y * 8 - state.camera.rotation.x) * cameraModifier;
      if (state.scene.rotation.x < -cameraRange)
        state.scene.rotation.x = -cameraRange;
      else if (state.scene.rotation.x > cameraRange)
        state.scene.rotation.x = cameraRange;
      if (state.scene.rotation.y < -cameraRange)
        state.scene.rotation.y = -cameraRange;
      else if (state.scene.rotation.y > cameraRange)
        state.scene.rotation.y = cameraRange;
      particlesRef.current.children.forEach(
        (child) => (child.rotation.y += 0.005)
      );
    });
  };

  return (
    <Canvas id="animation-canvas">
      <Animate />
      <PerspectiveCamera
        fov={75}
        aspect={2}
        near={1}
        far={100}
        position={[0, 8, 9]}
      />
      <Deer />
      <group ref={particlesRef}>{particlesArray}</group>
      <hemisphereLight
        skyColor={0xffffff}
        groundColor={0x000000}
        intensity={1}
      />
      <directionalLight
        position={[20, 14, 0]}
        color={0xffffff}
        intensity={1}
        target-position={[0, 0, 0]}
      />
    </Canvas>
  );
}

export default Animation;
