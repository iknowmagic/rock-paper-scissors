import { useState } from 'react'

const Rules = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex justify-center md:justify-end mt-auto md:-mb-4 w-full">
      <button
        className="flex justify-center items-center hover:bg-gradient-to-b hover:from-gray-100 hover:to-white border border-white rounded-lg w-32 h-10 font-semibold hover:text-[#3b4262] text-base uppercase tracking-wider transition-colors cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        rules
      </button>

      {/* Modal */}
      {showModal && (
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/50">
          <div className="flex flex-col items-center bg-white p-8 md:p-8 md:rounded-lg w-full md:w-[400px] h-full md:h-[461px]">
            <div className="md:w-full font-semibold text-[#3b4262] text-3xl md:text-left uppercase">
              rules
            </div>
            <div className="mt-24 md:mt-5">
              <img src="/assets/images/image-rules-bonus.svg" alt="rules" />
            </div>
            <button
              className="md:top-9 md:right-8 md:absolute mt-auto cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              <img src="/assets/images/icon-close.svg" alt="close" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Rules
