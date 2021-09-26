import { Canvas, useThree } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import GeishaMask from './GeishaMask'


export default function GeishaMaskCanvas({...props}) {

    return (
        <div {...props}>
            <Canvas >
                <pointLight intensity={0.2} position={[-4, 1, 0]} />
                <Suspense fallback={null}>
                    <GeishaMask position={[1, 0 , 0]}  />
                </Suspense>
            </Canvas>
        </div>
    )
}