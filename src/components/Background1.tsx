import { Environment, OrbitControls, Plane, TorusKnot } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Ruby from './meshes/Ruby'


export default function Background1() {

    return (
        <div className='background bg-1'>
            <Canvas>
                <pointLight position={[-5, 4, 6]} color='lightblue' intensity={0.4} />
                <TorusKnot position={[-5, 4, 6]} />
                <OrbitControls />
                <Suspense fallback={null}>

                    <Ruby scale={3} />
                </Suspense>
                <Plane args={[1000, 1000, 100, 100]} rotation={[Math.PI*1.5, 0, 0]} position={[0, -2, 0]}>
                    <meshLambertMaterial color='gray' />
                </Plane>
            </Canvas>
        </div>

    )
}