import { simplex3D } from '../../utils/simplexNoises'
import * as THREE from 'three'


const BackgroundParticle: [any, string, string] = [
    {
        uTime: 0,
        uSize: 5,
        uProgressSpeed: 0.01,
        uPerlinFrequency: 0.1,
        uPerlinMultiplier: 10,
        uMask: undefined,
        uMouse: new THREE.Vector2(0,0)
      },
      `
      #ifdef GL_ES \n
      precision mediump float;
      #endif

      uniform float uTime;
      uniform float uSize;
      uniform float uProgressSpeed;
      uniform float uPerlinFrequency;
      uniform float uPerlinMultiplier;
      uniform vec2 uMouse;

      attribute float aProgress;
      attribute float aSize;
      attribute float aAlpha;

      varying vec3 vUv;
      varying float vAlpha;

      ${simplex3D}

      void main()	{
        vUv = position;
        vUv.x *= 1. + uMouse.x;
        float progress = mod(aProgress + uTime * uProgressSpeed, 1.);
        vec4 modelPosition = modelMatrix * vec4(position, 1.);
        modelPosition.y += progress * 100.;
        float pos = snoise((modelPosition.xyz + vec3(100.*(uMouse.x + 1.),uTime * 0.5, uMouse.y))* uPerlinFrequency)* (2.+uMouse.x*6.);
        modelPosition.xy += pos;
        modelPosition.x += 5.;
        modelPosition.z += exp(pos);
        
        
        
        vec4 viewPosition = viewMatrix * modelPosition;
        gl_Position = projectionMatrix * viewPosition;

        gl_PointSize = uSize * aSize;
        gl_PointSize *= (1. / -viewPosition.z);

        vAlpha = aAlpha;
      }
      `,
      `
      #ifdef GL_ES \n
      precision mediump float;
      #endif
      
      
      uniform sampler2D uMask;
      uniform float uTime;

      varying float vAlpha;
      varying vec3 vUv;

      ${simplex3D}
      
      void main()
      {
          vec3 color = vec3(0., 0., 0.5);
          color.g += smoothstep(0., 2., sin(uTime*0.1)+1.);
          float maskStrength = texture2D(uMask, gl_PointCoord).r;
          gl_FragColor = vec4(color, maskStrength * 2.);
      }
      `
]

export default BackgroundParticle


