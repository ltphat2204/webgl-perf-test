export function getHardwareInfo() {
  const canvas = document.createElement('canvas')
  const gl = canvas.getContext('webgl')
  let gpu = 'Không xác định'

  if (gl) {
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    if (debugInfo) {
      gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    }
  }

  return {
    cpuCores: navigator.hardwareConcurrency || 'Không xác định',
    gpu: gpu,
    platform: navigator.platform || 'unknown',
  }
}

export function calculateAverage(results) {
  if (!results.length) return null
  
  return {
    meshCount: Math.round(results.reduce((a, b) => a + b.meshCount, 0) / results.length),
    vertices: Math.round(results.reduce((a, b) => a + b.vertices, 0) / results.length),
    drawCalls: Math.round(results.reduce((a, b) => a + b.drawCalls, 0) / results.length)
  }
}

export async function logTestResult(result) {
  const { cpuCores, gpu, platform } = getHardwareInfo()

  try {
    await fetch('/api/log-result', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: result.type,
        meshCount: result.meshCount,
        vertices: result.vertices,
        drawCalls: result.drawCalls,
        cpu: `${cpuCores} cores`,
        gpu,
        platform
      })
    })
  } catch (error) {
    console.error('Failed to log test result:', error)
  }
}
