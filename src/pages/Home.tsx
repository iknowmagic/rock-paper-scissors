import React from 'react'
import GameHeader from '../components/GameHeader'
import Board from '../components/Board'
import BoardSelected from '../components/BoardSelected'
import Rules from '../components/Rules'
import { useGameStore } from '../store/useGameStore'

const Home: React.FC = () => {
  const userChoice = useGameStore((state) => state.userChoice)

  return (
    <div className="game">
      <GameHeader />
      {!userChoice ? <Board /> : <BoardSelected />}
      <Rules />
    </div>
  )
}

export default Home
