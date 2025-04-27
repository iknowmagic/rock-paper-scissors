import { useGameStore } from '../store/useGameStore'
import GameHeader from '../components/GameHeader'
import Board from '../components/Board'
import BoardSelected from '../components/BoardSelected'
import Rules from '../components/Rules'

function Home() {
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
