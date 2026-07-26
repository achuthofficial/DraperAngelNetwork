import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'

export default function ParticleField() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ alpha: true, antialias: true }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Sparkles count={110} scale={[14, 8, 6]} size={2.2} speed={0.28} color="#f0d488" opacity={0.7} />
      </Suspense>
    </Canvas>
  )
}
