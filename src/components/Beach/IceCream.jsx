/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { animated, useSpring } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { myMaterials } from "../../utils/myMaterials";

export function IceCream(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/ice-cream/model.gltf");

  const { iceCreamScale, iceCreamY, coneRotationY } = useSpring({
    from: {
      iceCreamScale: 0.5,
      iceCreamY: 0.5,
      coneRotationY: 0,
    },
    to: [
      {
        iceCreamScale: 1,
        iceCreamY: 0.2,
        coneRotationY: Math.PI / 2,
      },
      {
        iceCreamY: 0,
        coneRotationY: 2 * Math.PI,
      },
      { iceCreamScale: 0.5, iceCreamY: 0.5, coneRotationY: 0 },
    ],
    config: {
      mass: 1,
      tension: 800,
      friction: 20,
    },
    loop: true,
  });

  return (
    <animated.group
      ref={group}
      {...props}
      dispose={null}
      rotation-y={coneRotationY}
    >
      <animated.mesh
        geometry={nodes.Mesh_iceCream.geometry}
        position-y={iceCreamY}
        scale-x={iceCreamScale}
        scale-y={iceCreamScale}
        scale-z={iceCreamScale}
      >
        <meshStandardMaterial {...myMaterials.pink} />
      </animated.mesh>
      <mesh
        geometry={nodes.Mesh_iceCream_1.geometry}
        material={materials.brownLight}
      >
        <meshStandardMaterial {...myMaterials.brown} />
      </mesh>
    </animated.group>
  );
}

useGLTF.preload("./models/ice-cream/model.gltf");
