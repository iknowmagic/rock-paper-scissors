import { useEffect, useState } from 'react'
import useGameStore, { GameChoice } from '@/store/useGameStore'
import { includes, random } from 'lodash'

type GameResult = 'user wins' | 'computer wins' | 'tie' | undefined

const BoardSelected = () => {
  const [computerChoice, setComputerChoice] = useState<GameChoice>(undefined)
  const [result, setResult] = useState<GameResult>(undefined)
  const userChoice = useGameStore((state) => state.userChoice)
  const score = useGameStore((state) => state.score)
  const setScore = useGameStore((state) => state.setScore)
  const resetUserChoice = useGameStore((state) => state.resetUserChoice)

  // Get computer selection and determine winner
  useEffect(() => {
    let timer: number

    // Define choices array inside the effect to avoid dependency issues
    const choices: GameChoice[] = [
      'rock',
      'paper',
      'scissors',
      'lizard',
      'spock',
    ]

    // Compare choices to determine winner - moved inside useEffect
    const compareResults = (
      userChoice: GameChoice,
      computerChoice: GameChoice,
    ): GameResult => {
      if (!userChoice || !computerChoice) return undefined

      const winningMap: Record<string, GameChoice[]> = {
        rock: ['lizard', 'scissors'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock'],
      }

      if (userChoice && computerChoice) {
        if (includes(winningMap[userChoice], computerChoice)) return 'user wins'
        if (userChoice === computerChoice) return 'tie'
        return 'computer wins'
      }

      return undefined
    }

    // Computer randomly selects a choice
    const computerSelection = (): GameChoice => {
      const numericChoice = random(0, choices.length - 1)
      return choices[numericChoice]
    }

    const determineResult = () => {
      const compChoice = computerSelection()
      const gameResult = compareResults(userChoice, compChoice)

      setComputerChoice(compChoice)
      setResult(gameResult)

      // Update score
      if (gameResult && gameResult !== 'tie') {
        setScore(gameResult === 'user wins' ? score + 1 : score - 1)
      }
    }

    // Use setTimeout instead of sleep
    timer = window.setTimeout(determineResult, 500)

    // Clean up timer on unmount or when userChoice changes
    return () => window.clearTimeout(timer)
  }, [userChoice, setScore, score])

  // Reset game
  const playAgain = () => {
    resetUserChoice()
  }

  const resultsAreIn = userChoice && computerChoice

  return (
    <div
      className={`relative flex w-[311px] h-[305px] mt-0 md:mt-[72px] md:w-full md:scale-100 ${resultsAreIn ? 'board-results-in' : ''}`}
    >
      <div className="flex flex-2 justify-center">
        {/* User Selection */}
        <div className="flex flex-col md:flex-col-reverse items-center selection-box">
          <div
            className={`flex items-center justify-center w-[125px] h-[120px] md:w-[288px] md:h-[276px] ${result === 'user wins' ? 'winner-shadow' : ''}`}
          >
            {userChoice && (
              <div
                className={`icon icon-${userChoice} scale-[1.3] md:scale-[3]`}
              ></div>
            )}
          </div>
          <div className="mt-7 md:mt-0 md:mb-[78px] font-semibold text-white text-sm md:text-xl uppercase leading-8 md:tracking-[3px] tracking-wider whitespace-nowrap">
            You picked
          </div>
        </div>

        {/* Computer Selection */}
        <div className="flex flex-col md:flex-col-reverse items-center ml-[42px] md:ml-[153px] selection-box">
          <div
            className={`flex items-center justify-center w-[125px] h-[120px] md:w-[288px] md:h-[276px] ${result === 'computer wins' ? 'winner-shadow' : ''}`}
          >
            {!computerChoice ? (
              <div className="bg-black/10 mb-[10px] rounded-full w-[110px] md:w-[224.63px] h-[110px] md:h-[224.63px]"></div>
            ) : (
              <div
                className={`icon icon-${computerChoice} scale-[1.3] md:scale-[3]`}
              ></div>
            )}
          </div>
          <div className="mt-7 md:mt-0 md:mb-[78px] font-semibold text-white text-sm md:text-xl uppercase leading-8 md:tracking-[3px] tracking-wider whitespace-nowrap">
            The house picked
          </div>
        </div>
      </div>

      {/* Results */}
      {resultsAreIn && (
        <div className="md:top-[30px] md:left-1/2 md:absolute flex flex-col items-center mt-[60px] md:mt-[130px] md:ml-[-110px] uppercase">
          <div className="results-text">
            {result === 'user wins' && 'You win'}
            {result === 'computer wins' && 'You lose'}
            {result === 'tie' && "It's a tie"}
          </div>
          <button
            className="flex justify-center items-center bg-gradient-to-b from-gray-100 to-white shadow-md mt-4 rounded-lg w-[220px] h-[48px] font-semibold text-[#3b4262] hover:text-[#db2e4d] text-base tracking-[2.5px] transition-colors"
            onClick={playAgain}
          >
            Play again
          </button>
        </div>
      )}
    </div>
  )
}

export default BoardSelected
