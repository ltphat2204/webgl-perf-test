import { useState, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PERFORMANCE_THRESHOLDS } from '../constants/performance'

export function usePerformanceTest(geometryDef, onStop, onRestartRequired) {
  const [meshes, setMeshes] = useState([])
  const [frameDropCount, setFrameDropCount] = useState(0)
  const lowFpsCounter = useRef(0)
  const frameRef = useRef(performance.now())
  const { gl } = useThree()
  const runningRef = useRef(true)

  // Reset state when geometry changes (new test starts)
  useEffect(() => {
    setMeshes([])
    setFrameDropCount(0)
    lowFpsCounter.current = 0
    frameRef.current = performance.now()
    runningRef.current = true
  }, [geometryDef])

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        onRestartRequired()
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [onRestartRequired])

  useFrame(() => {
    if (!runningRef.current) return

    const now = performance.now()
    const delta = now - frameRef.current
    frameRef.current = now
    const fps = 1000 / delta

    const currentDrawCalls = gl.info.render.calls

    // Check for severe performance drop
    if (fps < PERFORMANCE_THRESHOLDS.LOW_FPS_THRESHOLD) {
      lowFpsCounter.current += 1
      if (lowFpsCounter.current >= PERFORMANCE_THRESHOLDS.LOW_FPS_COUNT_LIMIT) {
        runningRef.current = false
        onRestartRequired()
        return
      }
    } else {
      lowFpsCounter.current = 0
    }

    // Count frame drops
    if (fps < PERFORMANCE_THRESHOLDS.TARGET_FPS) {
      setFrameDropCount(prev => prev + 1)
    } else {
      setFrameDropCount(0)
    }

    // Stop test if too many frame drops
    if (frameDropCount >= PERFORMANCE_THRESHOLDS.FRAME_DROP_LIMIT) {
      runningRef.current = false
      const totalVertices = meshes.length * geometryDef.vertices
      onStop({
        type: geometryDef.name,
        meshCount: meshes.length,
        vertices: totalVertices,
        drawCalls: currentDrawCalls,
      })
    } else {
      // Add new mesh - use functional update for better performance
      setMeshes(prev => [...prev, {
        key: prev.length,
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ]
      }])
    }

    gl.info.reset()
  })

  return meshes
}
