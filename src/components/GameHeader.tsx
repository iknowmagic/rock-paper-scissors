import { useGameStore } from '@/store/useGameStore'
import { useEffect, useState, useRef } from 'react'

function GameHeader() {
  const score = useGameStore((state) => state.score)
  const [isUpdated, setIsUpdated] = useState(false)
  const prevScore = useRef(score)

  useEffect(() => {
    if (score !== prevScore.current) {
      setIsUpdated(true)
      const timer = setTimeout(() => setIsUpdated(false), 500)
      prevScore.current = score
      return () => clearTimeout(timer)
    }
  }, [score])

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
        <span className={`score-number ${isUpdated ? 'updated' : ''}`}>
          {score}
        </span>
      </div>
    </header>
  )
}

export default GameHeader
