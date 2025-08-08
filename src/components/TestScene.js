import { usePerformanceTest } from '../hooks/usePerformanceTest'

export default function TestScene({ geometryDef, onStop, onRestartRequired }) {
  const meshes = usePerformanceTest(geometryDef, onStop, onRestartRequired)

  return meshes.map(({ key, position }) => (
    <mesh key={key} position={position}>
      {geometryDef.geometry}
      <meshStandardMaterial color={`hsl(${key % 360}, 100%, 50%)`} />
    </mesh>
  ))
}
