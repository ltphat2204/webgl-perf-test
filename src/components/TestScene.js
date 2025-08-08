import { useMemo } from 'react'
import { usePerformanceTest } from '../hooks/usePerformanceTest'

export default function TestScene({ geometryDef, onStop, onRestartRequired }) {
  const meshes = usePerformanceTest(geometryDef, onStop, onRestartRequired)

  // Single shared geometry instance - critical for performance
  const sharedGeometry = useMemo(() => {
    const { geometryType, args } = geometryDef
    
    switch (geometryType) {
      case 'box':
        return <boxGeometry args={args} />
      case 'sphere':
        return <sphereGeometry args={args} />
      case 'torusKnot':
        return <torusKnotGeometry args={args} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }, [geometryDef])

  // Material cache to reuse materials - prevents recreation
  const getMaterial = useMemo(() => {
    const materialCache = new Map()
    return (key) => {
      const hue = key % 360
      if (!materialCache.has(hue)) {
        materialCache.set(hue, <meshStandardMaterial color={`hsl(${hue}, 100%, 50%)`} />)
      }
      return materialCache.get(hue)
    }
  }, [])

  return meshes.map(({ key, position }) => (
    <mesh key={key} position={position}>
      {sharedGeometry}
      {getMaterial(key)}
    </mesh>
  ))
}
