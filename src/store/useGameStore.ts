import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Choice = 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock' | null

interface GameState {
  score: number
  userChoice: Choice
  computerChoice: Choice
  result: 'win' | 'lose' | 'draw' | null

  setUserChoice: (_choice: Choice) => void
  setComputerChoice: () => void
  determineWinner: () => void
  updateScore: () => void
  resetChoices: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      score: 0,
      userChoice: null,
      computerChoice: null,
      result: null,

      setUserChoice: (choice) => set({ userChoice: choice }),

      setComputerChoice: () => {
        const choices: Choice[] = [
          'rock',
          'paper',
          'scissors',
          'lizard',
          'spock',
        ]
        const randomIndex = Math.floor(Math.random() * choices.length)
        set({ computerChoice: choices[randomIndex] })
      },

      determineWinner: () => {
        const { userChoice, computerChoice } = get()

        if (!userChoice || !computerChoice) return

        if (userChoice === computerChoice) {
          set({ result: 'draw' })
          return
        }

        const winningCombinations: Record<string, string[]> = {
          rock: ['scissors', 'lizard'],
          paper: ['rock', 'spock'],
          scissors: ['paper', 'lizard'],
          lizard: ['paper', 'spock'],
          spock: ['scissors', 'rock'],
        }

        if (winningCombinations[userChoice].includes(computerChoice)) {
          set({ result: 'win' })
        } else {
          set({ result: 'lose' })
        }
      },

      updateScore: () => {
        const { result, score } = get()

        if (result === 'win') {
          set({ score: score + 1 })
        } else if (result === 'lose') {
          set({ score: Math.max(score - 1, 0) })
        }
      },

      resetChoices: () => {
        set({
          userChoice: null,
          computerChoice: null,
          result: null,
        })
      },
    }),
    {
      name: 'game-storage',
      partialize: (state) => ({ score: state.score }),
    },
  ),
)
