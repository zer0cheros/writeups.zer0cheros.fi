'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Model } from './Wille'
import { Computer } from './Computer'
import { OrbitControls } from '@react-three/drei'

export default function Experience() {
  return (
    <div className='w-full h-full bg-transparent'>
    <Canvas>
        <ambientLight intensity={0.9} />
        <mesh position={[-3, -5, -90]}>
        <Computer/>
        </mesh>
    </Canvas>
    </div>
  )
}
