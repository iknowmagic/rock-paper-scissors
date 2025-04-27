import React, { useState } from 'react'

const Rules: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="rules">
      <div className="btn-rules" onClick={() => setShowModal(!showModal)}>
        rules
      </div>

      {showModal && (
        <div className="rules-modal">
          <div className="modal-title">rules</div>
          <div className="modal-image">
            <img src="./assets/images/image-rules-bonus.svg" alt="rules" />
          </div>
          <div className="modal-close" onClick={() => setShowModal(false)}>
            <img src="./assets/images/icon-close.svg" alt="close" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Rules
