import useGameStore, { GameChoice } from '@/store/useGameStore'

const Board = () => {
  const setUserChoice = useGameStore((state) => state.setUserChoice)

  const handleSelection = (choice: GameChoice) => {
    setUserChoice(choice)
  }

  return (
    <div className="relative flex justify-center mt-auto md:mt-[75px] w-[311px] h-[305px] md:scale-150">
      <div className="board-bg"></div>

      {/* Scissors */}
      <div
        className="top-[-36px] absolute icon icon-scissors"
        onClick={() => handleSelection('scissors')}
      ></div>

      {/* Paper */}
      <div
        className="top-[50px] right-0 absolute icon icon-paper"
        onClick={() => handleSelection('paper')}
      ></div>

      {/* Rock */}
      <div
        className="top-[172px] right-[40px] absolute icon icon-rock"
        onClick={() => handleSelection('rock')}
      ></div>

      {/* Lizard */}
      <div
        className="top-[172px] left-[40px] absolute icon icon-lizard"
        onClick={() => handleSelection('lizard')}
      ></div>

      {/* Spock */}
      <div
        className="top-[50px] left-0 absolute icon icon-spock"
        onClick={() => handleSelection('spock')}
      ></div>
    </div>
  )
}

export default Board
