import { useGameStore } from '@/store/useGameStore'

interface BoardSelectedProps {
  onPlayAgain: () => void
}

function BoardSelected({ onPlayAgain }: BoardSelectedProps) {
  const userChoice = useGameStore((state) => state.userChoice)
  const computerChoice = useGameStore((state) => state.computerChoice)
  const result = useGameStore((state) => state.result)

  return (
    <div className={`board-selected ${result ? 'results-are-in' : ''}`}>
      <div className="selections">
        <div className="selection-box">
          <div
            className={`icon icon-${userChoice} icon-user ${result === 'win' ? 'winner' : ''}`}
          ></div>
          <span className="selection-text">You picked</span>
        </div>

        <div className="selection-box">
          {computerChoice ? (
            <div
              className={`icon icon-${computerChoice} icon-computer icon-computer-selected ${result === 'lose' ? 'winner' : ''}`}
            ></div>
          ) : (
            <div className="icon-computer"></div>
          )}
          <span className="selection-text computer-text">The house picked</span>
        </div>
      </div>

      {result && (
        <div className="results">
          <h2 className="results-text">
            {result === 'win' && 'You win'}
            {result === 'lose' && 'You lose'}
            {result === 'draw' && 'Draw'}
          </h2>
          <button className="play-again" onClick={onPlayAgain}>
            Play Again
          </button>
        </div>
      )}
    </div>
  )
}

export default BoardSelected
