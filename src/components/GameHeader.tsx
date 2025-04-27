import React from 'react'
import { useGameStore } from '../store/useGameStore'

const GameHeader: React.FC = () => {
  const score = useGameStore((state) => state.score)

  return (
    <div className="header">
      <div className="header-logo">
        <img src="./assets/images/logo-bonus.svg" alt="logo" />
      </div>
      <div className="header-score">
        <div className="score-text">score</div>
        <div className="score-number">{score}</div>
      </div>
    </div>
  )
}

export default GameHeader
