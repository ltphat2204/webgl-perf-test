import { useState } from 'react'
import { GEOMETRIES } from '../constants/geometries'
import { logTestResult } from '../utils/performance'

export function useTestState() {
  const [accepted, setAccepted] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [results, setResults] = useState([])
  const [done, setDone] = useState(false)
  const [isRestartRequired, setIsRestartRequired] = useState(false)
  const [testReady, setTestReady] = useState(false)

  const handleAccept = () => {
    setAccepted(true)
  }

  const handleDecline = () => {
    setAccepted(false)
  }

  const handleTestReady = () => {
    setTestReady(true)
  }

  const handleStop = async (result) => {
    setResults(prev => [...prev, result])
    
    // Log result in background, don't wait for it
    logTestResult(result).catch(error => 
      console.error('Failed to log test result:', error)
    )

    if (currentIndex + 1 < GEOMETRIES.length) {
      setCurrentIndex(currentIndex + 1)
      setTestReady(false)
      // Return true to indicate we need to start countdown for next test
      return true
    } else {
      setDone(true)
      // Return false to indicate test is complete
      return false
    }
  }

  const handleRestartRequired = () => {
    setIsRestartRequired(true)
    setTestReady(false)
  }

  const handleRestart = () => {
    setIsRestartRequired(false)
  }

  return {
    // State
    accepted,
    currentIndex,
    results,
    done,
    isRestartRequired,
    testReady,
    
    // Actions
    handleAccept,
    handleDecline,
    handleTestReady,
    handleStop,
    handleRestartRequired,
    handleRestart,
  }
}
