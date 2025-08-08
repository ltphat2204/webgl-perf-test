import { usePerformanceTest } from '../hooks/usePerformanceTest'

function GeometryComponent({ geometryDef }) {
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
}

export default function TestScene({ geometryDef, onStop, onRestartRequired }) {
  const meshes = usePerformanceTest(geometryDef, onStop, onRestartRequired)

  return meshes.map(({ key, position }) => (
    <mesh key={key} position={position}>
      <GeometryComponent geometryDef={geometryDef} />
      <meshStandardMaterial color={`hsl(${key % 360}, 100%, 50%)`} />
    </mesh>
  ))
}
