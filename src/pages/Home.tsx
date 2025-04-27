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
      {!userChoice ? (
        <Board />
      ) : (
        <BoardSelected onPlayAgain={handlePlayAgain} />
      )}
    </main>
  )
}

export default Home
