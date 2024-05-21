import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    retro_computer_setup_retro_computer_setup_Mat_0: THREE.Mesh
  }
  materials: {
    retro_computer_setup_Mat: THREE.MeshStandardMaterial
  }
}

export function Computer(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('models/com-transformed.glb') as GLTFResult
  const groupRef = useRef<THREE.Group>(null)

  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouse({ x: (event.clientX / window.innerWidth) * 3 - 1, y: -(event.clientY / window.innerHeight) * 3 + 1 })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = mouse.y * 0.2
      groupRef.current.rotation.y = mouse.x * 0.2
    }
  })
  return (
    <group {...props} dispose={null} ref={groupRef}>
      <mesh geometry={nodes.retro_computer_setup_retro_computer_setup_Mat_0.geometry} material={materials.retro_computer_setup_Mat} rotation={[-Math.PI / 2.5, 0, 0.3]} />
    </group>
  )
}

useGLTF.preload('models/com-transformed.glb')
