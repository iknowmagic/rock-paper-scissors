import { useState } from 'react'
import Home from '@/pages/Home'
import Rules from '@/components/Rules' // Import the Rules component
import '@/main.css'

function App() {
  const [showRules, setShowRules] = useState(false)

  return (
    <div className="game">
      <Home />
      {showRules && <Rules onClose={() => setShowRules(false)} />}
      <div className="rules">
        <button className="btn-rules" onClick={() => setShowRules(true)}>
          Rules
        </button>
      </div>
    </div>
  )
}

export default App
