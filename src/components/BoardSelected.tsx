import React, { useState, useEffect } from 'react'
import { useGameStore, GameChoice } from '../store/useGameStore'
import { includes, random } from 'lodash'

type GameResult = 'user wins' | 'computer wins' | 'tie' | undefined

const BoardSelected: React.FC = () => {
  // Local state
  const [computerChoice, setComputerChoice] = useState<GameChoice>(undefined)
  const [result, setResult] = useState<GameResult>(undefined)

  // Global state from store
  const userChoice = useGameStore((state) => state.userChoice)
  const score = useGameStore((state) => state.score)
  const setScore = useGameStore((state) => state.setScore)
  const resetUserChoice = useGameStore((state) => state.resetUserChoice)

  // Available game choices
  const choices: GameChoice[] = React.useMemo(
    () => ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    [],
  )

  // Function to get random computer selection
  const computerSelection = React.useCallback((): GameChoice => {
    const numericChoice = random(0, choices.length - 1)
    return choices[numericChoice]
  }, [choices])

  // Function to compare results and determine winner
  const compareResults = (
    userChoice: GameChoice,
    computerChoice: GameChoice,
  ): GameResult => {
    const winningMap: Record<string, GameChoice[]> = {
      rock: ['lizard', 'scissors'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock'],
    }

    if (includes(winningMap[userChoice!], computerChoice)) return 'user wins'
    if (userChoice === computerChoice) return 'tie'
    return 'computer wins'
  }

  // Initialize the game when component mounts
  useEffect(() => {
    const init = async () => {
      // Wait a bit before computer makes a selection (simulates thinking)
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Get computer choice and determine result
      const compChoice = computerSelection()
      const gameResult = compareResults(userChoice, compChoice)

      // Update state
      setComputerChoice(compChoice)
      setResult(gameResult)

      // Update score if not a tie
      if (gameResult === 'tie') return
      setScore(gameResult === 'user wins' ? score + 1 : score - 1)
    }

    init()
  }, [userChoice, computerSelection, score, setScore]) // Run when user choice changes

  // Handler for Play Again button
  const playAgain = () => {
    resetUserChoice()
  }

  return (
    <div
      className="board-selected"
      data-results-are-in={Boolean(userChoice && computerChoice)}
    >
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
            <div
              className={`icon-computer ${computerChoice ? `icon-computer-selected icon-${computerChoice}` : ''}`}
            ></div>
          </div>
          <div className="selection-text computer-text">The house picked</div>
        </div>
      </div>

      {userChoice && computerChoice && (
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
