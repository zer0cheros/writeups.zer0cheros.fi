import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    rob3_low039: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    [key: string]: THREE.Material
  }
  animations: GLTFAction[]
}

type ActionName = 'Armature|mixamo.com|Layer0' | 'Armature|mixamo.com|Layer0.001' | 'Armature|mixamo.com|Layer0.002'
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['skinnedMesh'] | JSX.IntrinsicElements['bone']>>

export function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('models/robot.glb') as GLTFResult
  const { actions } = useAnimations(animations, group)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: (event.clientX / window.innerWidth) * 3 - 1, y: -(event.clientY / window.innerHeight) * 3 + 1 })
    }
    actions['Armature|mixamo.com|Layer0']!.reset().play() 
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * 0.3
      groupRef.current.rotation.y = mouse.x * 0.3
    }
  })
  return (
    <group {...props} dispose={null}>
      <ambientLight intensity={0.9} />
      <group ref={group} name="Scene">
        <group  name="Armature" rotation={[Math.PI / 2, 0, -0.06]} scale={4.50}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="rob3_low039" geometry={nodes.rob3_low039.geometry} material={materials['YourMaterialName']} skeleton={nodes.rob3_low039.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/robot.glb')
