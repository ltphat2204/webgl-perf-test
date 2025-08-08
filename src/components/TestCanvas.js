import { Canvas } from '@react-three/fiber'
import { TEST_CONFIG } from '../constants/performance'
import TestScene from './TestScene'

export default function TestCanvas({ 
  shouldRenderScene, 
  currentGeometry, 
  currentIndex, 
  onStop, 
  onRestartRequired 
}) {
  return (
    <Canvas camera={{ 
      position: TEST_CONFIG.DEFAULT_CAMERA_POSITION, 
      fov: TEST_CONFIG.DEFAULT_FOV 
    }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {shouldRenderScene && (
        <TestScene
          key={currentIndex}
          geometryDef={currentGeometry}
          onStop={onStop}
          onRestartRequired={onRestartRequired}
        />
      )}
    </Canvas>
  )
}
