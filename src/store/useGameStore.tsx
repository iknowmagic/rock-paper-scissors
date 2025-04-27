import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type GameChoice =
  | 'rock'
  | 'paper'
  | 'scissors'
  | 'lizard'
  | 'spock'
  | undefined

interface GameState {
  score: number
  userChoice: GameChoice
  setScore: (_score: number) => void
  setUserChoice: (_choice: GameChoice) => void
  resetUserChoice: () => void
}

// Create a Zustand store that persists to localStorage
const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      score: 0,
      userChoice: undefined,
      setScore: (score) => set({ score }),
      setUserChoice: (userChoice) => set({ userChoice }),
      resetUserChoice: () => set({ userChoice: undefined }),
    }),
    {
      name: 'game-storage', // Name for localStorage key
      partialize: (state) => ({ score: state.score }), // Only persist score
    },
  ),
)

export default useGameStore
