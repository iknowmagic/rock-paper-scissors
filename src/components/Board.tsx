import { useGameStore, GameChoice } from '../store/useGameStore'

function Board() {
  const setUserChoice = useGameStore((state) => state.setUserChoice)

  const handleSelection = (choice: GameChoice) => {
    setUserChoice(choice)
  }

  return (
    <div className="board">
      <div className="board-bg"></div>
      <div
        className="icon icon-rock"
        onClick={() => handleSelection('rock')}
        data-testid="choice-rock"
      ></div>
      <div
        className="icon icon-paper"
        onClick={() => handleSelection('paper')}
        data-testid="choice-paper"
      ></div>
      <div
        className="icon icon-scissors"
        onClick={() => handleSelection('scissors')}
        data-testid="choice-scissors"
      ></div>
      <div
        className="icon icon-lizard"
        onClick={() => handleSelection('lizard')}
        data-testid="choice-lizard"
      ></div>
      <div
        className="icon icon-spock"
        onClick={() => handleSelection('spock')}
        data-testid="choice-spock"
      ></div>
    </div>
  )
}

export default Board
