import { useState, useCallback, useRef } from 'react'
import { TEST_CONFIG } from '../constants/performance'

export function useCountdown() {
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [countdown, setCountdown] = useState(TEST_CONFIG.COUNTDOWN_DURATION)
  const intervalRef = useRef(null)

  const startCountdown = useCallback((callback) => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setIsCountingDown(true)
    let value = TEST_CONFIG.COUNTDOWN_DURATION
    setCountdown(value)
    
    intervalRef.current = setInterval(() => {
      value -= 1
      setCountdown(value)
      if (value === 0) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setIsCountingDown(false)
        if (callback) callback()
      }
    }, 1000)
    
    // Return cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [])

  return {
    isCountingDown,
    countdown,
    startCountdown
  }
}
