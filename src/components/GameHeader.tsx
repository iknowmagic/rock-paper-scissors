import useGameStore from '@/store/useGameStore'

const GameHeader = () => {
  const score = useGameStore((state) => state.score)

  return (
    <div className="flex justify-between items-center mb-24 md:mb-0 p-2 md:p-4 border-3 border-light rounded-md w-full">
      <div className="header-logo">
        <img
          src="/assets/images/logo-bonus.svg"
          alt="logo"
          className="w-12 md:w-28 h-12 md:h-28"
        />
      </div>
      <div className="flex flex-col items-center bg-gradient-to-b from-white to-gray-100 shadow-md p-2 md:p-4 rounded w-20 md:w-36 h-18 md:h-28">
        <div className="font-bold text-score-blue text-xs md:text-base uppercase tracking-widest">
          score
        </div>
        <div className="font-bold text-score-gray text-4xl md:text-6xl">
          {score}
        </div>
      </div>
    </div>
  )
}

export default GameHeader
