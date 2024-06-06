'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import  {Model}  from './Robot'
import { Suspense } from 'react'

export default function Experience() {
  return (
    <div className='w-full h-full bg-transparent'>
      <Suspense fallback={''}>
        <Canvas>
        <mesh position={[-45, -15, -90]}>
          <Model />
        </mesh>
      </Canvas>
     </Suspense>
    </div>
  )
}
