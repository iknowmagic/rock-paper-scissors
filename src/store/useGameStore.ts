import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Type for game choices
export type GameChoice =
  | 'rock'
  | 'paper'
  | 'scissors'
  | 'lizard'
  | 'spock'
  | undefined

// Define the shape of our store
interface GameState {
  score: number
  userChoice: GameChoice
  setScore: (_score: number) => void
  setUserChoice: (_choice: GameChoice) => void
  resetUserChoice: () => void
}

// Create the store with persistence
export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      score: 0,
      userChoice: undefined,
      setScore: (score) => set({ score }),
      setUserChoice: (choice) => set({ userChoice: choice }),
      resetUserChoice: () => set({ userChoice: undefined }),
    }),
    {
      name: 'game-storage', // Storage key
      partialize: (state) => ({ score: state.score }), // Only persist score
    },
  ),
)
