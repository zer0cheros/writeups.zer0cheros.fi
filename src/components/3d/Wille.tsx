'use client'
import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useGLTF, useFBX, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['lambert1.001']: THREE.MeshStandardMaterial
  }
  animations: THREE.AnimationClip[]
}

type ModelProps = JSX.IntrinsicElements['group'] & {
  animation: string
}

export function Model({ animation = "Dance", ...props }: ModelProps) {
  const group = useRef();
  const { nodes, materials } = useGLTF('models/robot-transformed.glb') as GLTFResult;
  const { animations: fbxAnimations } = useFBX('models/dance.fbx');
  const { actions, mixer } = useAnimations(fbxAnimations, group);

  // Ensure the animation clip names match the expected ones
  fbxAnimations.forEach((clip) => console.log(`FBX Animation: ${clip.name}`));
  fbxAnimations[0].name = animation;

  // Log nodes and actions for debugging
  useEffect(() => {
    console.log('GLTF nodes:', nodes);
    console.log('Loaded actions:', actions);
    console.log('Requested animation:', animation);

    // Play the animation if actions and the specified animation are available
    if (actions && actions[animation]) {
      console.log(`Playing animation: ${animation}`);
      actions[animation].reset().fadeIn(0.5).play();
    } else {
      console.warn(`Animation "${animation}" not found.`);
    }

    return () => {
      if (actions && actions[animation]) {
        actions[animation].fadeOut(0.5);
      }
    };
  }, [animation, actions]);

  // Update the mixer on each frame
  useFrame((state, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['lambert1.001']} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  );
}

Model.propTypes = {
  animation: PropTypes.string
}

useGLTF.preload('models/robot-transformed.glb');
