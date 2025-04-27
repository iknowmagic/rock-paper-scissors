import { useEffect, useState } from 'react'
import { useGameStore, useGameLogic } from '../store/useGameStore'

function BoardSelected() {
  // Game state hooks
  const {
    userChoice,
    computerChoice,
    result,
    resetGame,
    setComputerChoice,
    setResult,
    updateScore,
  } = useGameStore((state) => ({
    userChoice: state.userChoice,
    computerChoice: state.computerChoice,
    result: state.result,
    resetGame: state.resetGame,
    setComputerChoice: state.setComputerChoice,
    setResult: state.setResult,
    updateScore: state.updateScore,
  }))

  // Game logic
  const { getComputerChoice, determineWinner } = useGameLogic()

  // Loading state to handle computer's "thinking" time
  const [isLoading, setIsLoading] = useState(true)

  // Handle game logic when component mounts
  useEffect(() => {
    const calculateResult = async () => {
      // Simulate thinking delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Calculate computer choice and result
      const compChoice = getComputerChoice()
      setComputerChoice(compChoice)

      const gameResult = determineWinner(userChoice, compChoice)
      setResult(gameResult)

      // Update score based on result (skip if tie)
      if (gameResult !== 'tie') {
        updateScore(gameResult)
      }

      setIsLoading(false)
    }

    calculateResult()
  }, [
    userChoice,
    setComputerChoice,
    setResult,
    updateScore,
    getComputerChoice,
    determineWinner,
  ])

  const playAgain = () => {
    resetGame()
  }

  const resultsAreIn = userChoice && computerChoice

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
