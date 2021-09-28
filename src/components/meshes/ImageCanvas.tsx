//@ts-nocheck
import { OrbitControls, Plane, shaderMaterial, TorusKnot, useTexture } from '@react-three/drei'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import React, { Suspense, useLayoutEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { simplex3D } from '../../utils/simplexNoises'


export default function ImageCanvas({textureURLS=[], idx, ...props}: { textureURLS: string[], idx: number}) {

    return (
        <div style={{
            minWidth: '100%',
            width: '110%',
            height: '100%'
        }} {...props} >
            <Canvas>
                <ambientLight />
                <OrbitControls />
                <Suspense fallback={null}>
                    <ImagePlane textureURLS={textureURLS} idx={idx} />
                </Suspense>
            </Canvas>
        </div>
    )
}


const ImageMaterial = shaderMaterial(
    {
        uTime: 0,
        uTexture: null,
        uMouse: null
    },
    `
    varying vec2 vUv;
    varying float vWave;
    uniform float uTime;
    uniform vec2 uMouse;
    
    ${simplex3D}

    void main() {
        vUv = uv;
        float pct = 0.;
        pct = distance(vUv, uMouse) * 0.2;

        vec3 pos = position;
        float noiseFreq = 0.02;
        float noiseAmp = 0.05; 
        vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
        pos.z += snoise(noisePos) * noiseAmp;
        vWave = pos.z; // Off it goes!
        pos.z += pct;
        
      
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
    }`,
    `
    varying vec2 vUv;
    varying float vWave;
    uniform sampler2D uTexture;
    uniform vec2 uMouse;

    void main() {
        

        float wave = vWave * 0.2;
        // Split each texture color vector
        float r = texture2D(uTexture, vUv).r;
        float g = texture2D(uTexture, vUv).g;
        float b = texture2D(uTexture, vUv + wave).b;
        // Put them back together
        vec3 texture = vec3(r, g, b);
        gl_FragColor = vec4(texture, 1.);
    }
    `
)

extend({ ImageMaterial })

const ImagePlane = ({ textureURLS, idx }) => {
    const ref = useRef<THREE.Object3D>()
    const textures = useTexture(textureURLS)
    const middleCoord = new THREE.Vector2(0.5, 0.5)
    
    useLayoutEffect(() => {
        ref.current.material.uniforms.uTexture.value = textures[idx]
    }, [idx])

    useFrame((state, delta) => {
        ref.current.material.uniforms.uTime.value += delta
        ref.current.material.uniforms.uMouse.value = middleCoord.clone().add(state.mouse)
        ref.current.rotation.set(
            THREE.MathUtils.lerp(ref.current.rotation.x, (state.mouse.y % 2)/-4, 0.01), 
            THREE.MathUtils.lerp(ref.current.rotation.y, state.mouse.x/4, 0.01), 
            0,
            'YXZ'
            )
    })

    return (
        <Plane ref={ref} args={[10, 6, 20, 30]} >
            <imageMaterial />
        </Plane>
    )
}