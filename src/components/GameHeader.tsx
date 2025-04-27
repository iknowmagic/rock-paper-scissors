interface GameHeaderProps {
  score: number
}

function GameHeader({ score }: GameHeaderProps) {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="/assets/images/logo-bonus.svg"
          alt="Rock Paper Scissors Logo"
        />
      </div>
      <div className="header-score">
        <span className="score-text">Score</span>
        <span className="score-number">{score}</span>
      </div>
    </header>
  )
}

export default GameHeader
