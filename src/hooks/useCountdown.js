import { useState, useCallback } from 'react'
import { TEST_CONFIG } from '../constants/performance'

export function useCountdown() {
  const [isCountingDown, setIsCountingDown] = useState(false)
  const [countdown, setCountdown] = useState(TEST_CONFIG.COUNTDOWN_DURATION)

  const startCountdown = useCallback((callback) => {
    setIsCountingDown(true)
    let value = TEST_CONFIG.COUNTDOWN_DURATION
    setCountdown(value)
    
    const interval = setInterval(() => {
      value -= 1
      setCountdown(value)
      if (value === 0) {
        clearInterval(interval)
        setIsCountingDown(false)
        if (callback) callback()
      }
    }, 1000)
  }, [])

  return {
    isCountingDown,
    countdown,
    startCountdown
  }
}
