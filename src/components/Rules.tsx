interface RulesProps {
  onClose: () => void
}

function Rules({ onClose }: RulesProps) {
  return (
    <div className="rules-modal">
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
        onClick={onClose}
      />
    </div>
  )
}

export default Rules
