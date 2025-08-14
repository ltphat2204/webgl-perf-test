'use client'

import { GEOMETRIES } from '../constants'
import { useEffect, useState } from 'react'
import { useTestState, useCountdown } from '../hooks'
import {
  WelcomeOverlay,
  CountdownOverlay,
  TestProgress,
  RestartOverlay,
  DeclineMessage,
  ResultsOverlay,
  TestCanvas,
  MobileNoticeOverlay
} from '../components'

export default function PerformanceTest() {
  const {
    accepted,
    currentIndex,
    results,
    done,
    isRestartRequired,
    testReady,
    handleAccept,
    handleDecline,
    handleTestReady,
    handleStop,
    handleRestartRequired,
    handleRestart,
  } = useTestState()

  const { isCountingDown, countdown, startCountdown } = useCountdown()

  const handleStopAndContinue = (result) => {
    const shouldContinue = handleStop(result)
    if (shouldContinue) {
      // Start countdown for next test
      startCountdown(handleTestReady)
    }
  }

  const handleAcceptAndStart = () => {
    handleAccept()
    startCountdown(handleTestReady)
  }

  const handleRestartAndCountdown = () => {
    handleRestart()
    startCountdown(handleTestReady)
  }

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window.opera ?? '')
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)
    setIsMobile(mobile)
  }, [])

  const shouldRenderScene = !isMobile && accepted === true && testReady && !done && !isRestartRequired
  const currentGeometry = GEOMETRIES[currentIndex]

  return (
    <div className="w-screen h-screen relative">
      {isMobile && (
        <MobileNoticeOverlay forceShow />
      )}
      {!isMobile && (
        <TestCanvas
        shouldRenderScene={shouldRenderScene}
        currentGeometry={currentGeometry}
        currentIndex={currentIndex}
        onStop={handleStopAndContinue}
        onRestartRequired={handleRestartRequired}
        />
      )}

      {!isMobile && accepted === null && (
        <WelcomeOverlay
          onAccept={handleAcceptAndStart}
          onDecline={handleDecline}
        />
      )}

      {!isMobile && accepted === false && <DeclineMessage />}

      {!isMobile && isCountingDown && <CountdownOverlay countdown={countdown} />}

      {!isMobile && accepted === true && !done && !isRestartRequired && (
        <TestProgress currentIndex={currentIndex} />
      )}

      {!isMobile && isRestartRequired && (
        <RestartOverlay
          currentIndex={currentIndex}
          onRestart={handleRestartAndCountdown}
        />
      )}

      {!isMobile && done && <ResultsOverlay results={results} />}
    </div>
  )
}
