import { useEffect, useState, useRef } from 'react'
import { useGameStore, useGameLogic } from '../store/useGameStore'

function BoardSelected() {
  // Get everything we need from the store
  const userChoice = useGameStore((state) => state.userChoice)
  const computerChoice = useGameStore((state) => state.computerChoice)
  const result = useGameStore((state) => state.result)
  const setComputerChoice = useGameStore((state) => state.setComputerChoice)
  const setResult = useGameStore((state) => state.setResult)
  const updateScore = useGameStore((state) => state.updateScore)
  const resetGame = useGameStore((state) => state.resetGame)

  // Game logic
  const { getComputerChoice, determineWinner } = useGameLogic()

  // Loading state
  const [isLoading, setIsLoading] = useState(true)

  // Use ref to track if initialization has happened
  const initializedRef = useRef(false)

  // Initialize when component mounts or when dependencies change
  useEffect(() => {
    // Skip if already initialized or if computerChoice is already set
    if (initializedRef.current || computerChoice) {
      return
    }

    const init = async () => {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Get computer choice
      const compChoice = getComputerChoice()
      setComputerChoice(compChoice)

      // Determine winner
      const gameResult = determineWinner(userChoice, compChoice)
      setResult(gameResult)

      // Update score if not a tie
      if (gameResult !== 'tie') {
        updateScore(gameResult)
      }

      setIsLoading(false)
      initializedRef.current = true
    }

    init()

    // Reset the ref when userChoice changes (for new rounds)
    return () => {
      if (userChoice !== computerChoice) {
        initializedRef.current = false
      }
    }
  }, [
    userChoice,
    computerChoice,
    getComputerChoice,
    determineWinner,
    setComputerChoice,
    setResult,
    updateScore,
  ])

  const playAgain = () => {
    resetGame()
    // Reset our initialization tracker for the next round
    initializedRef.current = false
  }

  const resultsAreIn = Boolean(userChoice && computerChoice)

  return (
    <div className="board-selected" data-results-are-in={resultsAreIn}>
      <div className="selections">
        <div className="selection-box">
          <div className={`icon ${result === 'user wins' ? 'winner' : ''}`}>
            <div
              className={`icon-user ${userChoice ? `icon-${userChoice}` : ''}`}
            ></div>
          </div>
          <div className="selection-text">You picked</div>
        </div>

        <div className="selection-box">
          <div className={`icon ${result === 'computer wins' ? 'winner' : ''}`}>
            {isLoading ? (
              <div className="icon-computer"></div>
            ) : (
              <div
                className={`icon-computer icon-computer-selected icon-${computerChoice}`}
              ></div>
            )}
          </div>
          <div className="selection-text computer-text">The house picked</div>
        </div>
      </div>

      {resultsAreIn && !isLoading && (
        <div className="results">
          {result === 'user wins' && (
            <div className="results-text">You win</div>
          )}
          {result === 'computer wins' && (
            <div className="results-text">You lose</div>
          )}
          {result === 'tie' && (
            <div className="results-text">It&apos;s a tie</div>
          )}
          <div className="play-again" onClick={playAgain}>
            Play again
          </div>
        </div>
      )}
    </div>
  )
}

export default BoardSelected
