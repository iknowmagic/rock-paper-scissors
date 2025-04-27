import { useGameStore } from '@/store/useGameStore'

interface BoardSelectedProps {
  onPlayAgain: () => void
}

function BoardSelected({ onPlayAgain }: BoardSelectedProps) {
  const userChoice = useGameStore((state) => state.userChoice)
  const computerChoice = useGameStore((state) => state.computerChoice)
  const result = useGameStore((state) => state.result)

  return (
    <div
      className={`board-selected ${userChoice && computerChoice ? 'results-are-in' : ''}`}
    >
      <div className="selections">
        <div className="selection-box">
          <div className={`icon ${result === 'win' ? 'winner' : ''}`}>
            <div className={`icon-user icon-${userChoice}`}></div>
          </div>
          <div className="selection-text">You picked</div>
        </div>

        <div className="selection-box">
          <div className={`icon ${result === 'lose' ? 'winner' : ''}`}>
            {computerChoice ? (
              <div
                className={`icon-computer icon-computer-selected icon-${computerChoice}`}
              ></div>
            ) : (
              <div className="icon-computer"></div>
            )}
          </div>
          <div className="selection-text computer-text">The house picked</div>
        </div>
      </div>

      {result && (
        <div className="results">
          <div className="results-text">
            {result === 'win' && 'You win'}
            {result === 'lose' && 'You lose'}
            {result === 'draw' && "It's a tie"}
          </div>
          <div className="play-again" onClick={onPlayAgain}>
            Play Again
          </div>
        </div>
      )}
    </div>
  )
}

export default BoardSelected
