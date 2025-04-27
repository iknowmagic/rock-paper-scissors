import { useGameStore, GameChoice } from '@/store/useGameStore'

const Board = () => {
  const setUserChoice = useGameStore((state) => state.setUserChoice)

  const handleSelection = (choice: GameChoice) => {
    setUserChoice(choice)
  }

  return (
    <div className="board">
      <div className="board-bg"></div>
      <div
        className="icon icon-scissors"
        onClick={() => handleSelection('scissors')}
      ></div>
      <div
        className="icon icon-paper"
        onClick={() => handleSelection('paper')}
      ></div>
      <div
        className="icon icon-rock"
        onClick={() => handleSelection('rock')}
      ></div>
      <div
        className="icon icon-lizard"
        onClick={() => handleSelection('lizard')}
      ></div>
      <div
        className="icon icon-spock"
        onClick={() => handleSelection('spock')}
      ></div>
    </div>
  )
}

export default Board
