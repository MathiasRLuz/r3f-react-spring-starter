/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { myMaterials } from "../../utils/myMaterials";

export function Palm(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "./models/palm-detailed-long/model.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <mesh
          geometry={nodes.Group_152.geometry}
          position={[-0.65, 0, 0.59]}
          scale={0.77}
        >
          <meshStandardMaterial {...myMaterials.brown} />
        </mesh>
        <mesh geometry={nodes.Group_154.geometry} position={[0, 1.72, 0]}>
          <meshStandardMaterial {...myMaterials.green} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./models/palm-detailed-long/model.gltf");
