'use client'

import { GEOMETRIES } from '../constants'
import { useTestState, useCountdown } from '../hooks'
import {
  WelcomeOverlay,
  CountdownOverlay,
  TestProgress,
  RestartOverlay,
  DeclineMessage,
  ResultsOverlay,
  TestCanvas
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

  const shouldRenderScene = accepted === true && testReady && !done && !isRestartRequired
  const currentGeometry = GEOMETRIES[currentIndex]

  return (
    <div className="w-screen h-screen relative">
      <TestCanvas
        shouldRenderScene={shouldRenderScene}
        currentGeometry={currentGeometry}
        currentIndex={currentIndex}
        onStop={handleStopAndContinue}
        onRestartRequired={handleRestartRequired}
      />

      {accepted === null && (
        <WelcomeOverlay
          onAccept={handleAcceptAndStart}
          onDecline={handleDecline}
        />
      )}

      {accepted === false && <DeclineMessage />}

      {isCountingDown && <CountdownOverlay countdown={countdown} />}

      {accepted === true && !done && !isRestartRequired && (
        <TestProgress currentIndex={currentIndex} />
      )}

      {isRestartRequired && (
        <RestartOverlay
          currentIndex={currentIndex}
          onRestart={handleRestartAndCountdown}
        />
      )}

      {done && <ResultsOverlay results={results} />}
    </div>
  )
}
