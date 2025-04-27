interface BoardProps {
  onSelect: (_choice: string) => void
}

function Board({ onSelect }: BoardProps) {
  const handleSelection = (choice: string) => {
    onSelect(choice)
  }

  return (
    <div className="board">
      <div className="board-bg"></div>
      <div
        className="icon icon-scissors"
        onClick={() => handleSelection('scissors')}
        role="button"
        aria-label="Choose scissors"
      ></div>
      <div
        className="icon icon-paper"
        onClick={() => handleSelection('paper')}
        role="button"
        aria-label="Choose paper"
      ></div>
      <div
        className="icon icon-rock"
        onClick={() => handleSelection('rock')}
        role="button"
        aria-label="Choose rock"
      ></div>
      <div
        className="icon icon-lizard"
        onClick={() => handleSelection('lizard')}
        role="button"
        aria-label="Choose lizard"
      ></div>
      <div
        className="icon icon-spock"
        onClick={() => handleSelection('spock')}
        role="button"
        aria-label="Choose spock"
      ></div>
    </div>
  )
}

export default Board
