import GameHeader from '@/components/GameHeader'
import Board from '@/components/Board'
import BoardSelected from '@/components/BoardSelected'
import Rules from '@/components/Rules'
import useGameStore from '@/store/useGameStore'

const Home = () => {
  const userChoice = useGameStore((state) => state.userChoice)

  return (
    <div className="flex flex-col items-center px-8 py-8 md:py-12 h-full">
      <GameHeader />
      {!userChoice ? <Board /> : <BoardSelected />}
      <Rules />
    </div>
  )
}

export default Home
