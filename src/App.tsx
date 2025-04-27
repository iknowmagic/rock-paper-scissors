import { useState } from 'react'
import Home from '@/pages/Home'
import Rules from '@/components/Rules'

function App() {
  const [showRules, setShowRules] = useState(false)

  return (
    <div className="game">
      <Home />
      {showRules && <Rules onClose={() => setShowRules(false)} />}
      <div className="rules">
        <div className="btn-rules" onClick={() => setShowRules(true)}>
          Rules
        </div>
      </div>
    </div>
  )
}

export default App
