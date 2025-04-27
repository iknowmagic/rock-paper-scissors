import { useEffect } from 'react'
import GameHeader from '@/components/GameHeader'
import Board from '@/components/Board'
import BoardSelected from '@/components/BoardSelected'
import { useGameStore } from '@/store/useGameStore'

function Home() {
  const userChoice = useGameStore((state) => state.userChoice)
  const computerChoice = useGameStore((state) => state.computerChoice)
  const setUserChoice = useGameStore((state) => state.setUserChoice)
  const setComputerChoice = useGameStore((state) => state.setComputerChoice)
  const determineWinner = useGameStore((state) => state.determineWinner)
  const updateScore = useGameStore((state) => state.updateScore)
  const resetChoices = useGameStore((state) => state.resetChoices)

  // Update Choice type to include all five options
  type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock'

  // Adjust handler to match Board component's expected prop type
  const handleSelect = (choice: string) => {
    setUserChoice(choice as Choice)
  }

  useEffect(() => {
    if (userChoice) {
      const timer = setTimeout(() => {
        setComputerChoice()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [userChoice, setComputerChoice])

  useEffect(() => {
    if (userChoice && computerChoice) {
      determineWinner()
    }
  }, [computerChoice, userChoice, determineWinner])

  useEffect(() => {
    if (computerChoice) {
      updateScore()
    }
  }, [determineWinner, updateScore, computerChoice])

  const handlePlayAgain = () => {
    resetChoices()
  }

  return (
    <main>
      <GameHeader />
      {/* Replace the SwitchTransition with a simple conditional rendering with CSS classes */}
      <div
        className={`game-container ${userChoice ? 'showing-result' : 'showing-selection'}`}
      >
        {userChoice ? (
          <BoardSelected onPlayAgain={handlePlayAgain} />
        ) : (
          <Board onSelect={handleSelect} />
        )}
      </div>
    </main>
  )
}

export default Home
