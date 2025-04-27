import { useEffect, useState, useCallback } from 'react'

interface RulesProps {
  onClose: () => void
}

function Rules({ onClose }: RulesProps) {
  const [isVisible, setIsVisible] = useState(false)

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(onClose, 300) // Wait for animation to complete
  }, [onClose])

  useEffect(() => {
    setIsVisible(true)
    // Add event listener to allow ESC key to close modal
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [handleClose]) // Fixed dependency array

  return (
    <>
      <div
        className={`modal-backdrop ${isVisible ? 'visible' : ''}`}
        onClick={handleClose}
      ></div>
      <div className={`rules-modal ${isVisible ? 'visible' : ''}`}>
        <h2 className="modal-title">Rules</h2>
        <img
          className="modal-image"
          src="/assets/images/image-rules-bonus.svg"
          alt="Game Rules"
        />
        <img
          className="modal-close"
          src="/assets/images/icon-close.svg"
          alt="Close"
          onClick={handleClose}
        />
      </div>
    </>
  )
}

export default Rules
