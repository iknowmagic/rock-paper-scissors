import { useEffect } from 'react'
import GameHeader from '@/components/GameHeader'
import Board from '@/components/Board'
import BoardSelected from '@/components/BoardSelected'
import { useGameStore } from '@/store/useGameStore'

function Home() {
  const userChoice = useGameStore((state) => state.userChoice)
  const computerChoice = useGameStore((state) => state.computerChoice)
  const setComputerChoice = useGameStore((state) => state.setComputerChoice)
  const determineWinner = useGameStore((state) => state.determineWinner)
  const updateScore = useGameStore((state) => state.updateScore)
  const resetChoices = useGameStore((state) => state.resetChoices)
  const score = useGameStore((state) => state.score)

  useEffect(() => {
    // When userChoice changes, trigger computer choice and determine winner
    if (userChoice) {
      const timer = setTimeout(() => {
        setComputerChoice()
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [userChoice, setComputerChoice])

  useEffect(() => {
    // When computer makes a choice, determine the winner
    if (userChoice && computerChoice) {
      determineWinner()
    }
  }, [computerChoice, userChoice, determineWinner])

  useEffect(() => {
    // Update score when a winner is determined
    updateScore()
  }, [determineWinner, updateScore])

  const handlePlayAgain = () => {
    resetChoices()
  }

  return (
    <main>
      <GameHeader score={score} />
      {userChoice ? <BoardSelected onPlayAgain={handlePlayAgain} /> : <Board />}
    </main>
  )
}

export default Home
