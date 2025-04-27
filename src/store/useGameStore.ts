import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type GameChoice =
  | 'rock'
  | 'paper'
  | 'scissors'
  | 'lizard'
  | 'spock'
  | undefined
export type GameResult = 'user wins' | 'computer wins' | 'tie' | undefined

interface GameState {
  score: number
  userChoice: GameChoice
  computerChoice: GameChoice
  result: GameResult
  setUserChoice: (_choice: GameChoice) => void
  setComputerChoice: (_choice: GameChoice) => void
  setResult: (_result: GameResult) => void
  updateScore: (_result: GameResult) => void
  resetGame: () => void
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      score: 0,
      userChoice: undefined,
      computerChoice: undefined,
      result: undefined,

      setUserChoice: (choice) => set({ userChoice: choice }),

      setComputerChoice: (_choice) => set({ computerChoice: _choice }),

      setResult: (result) => set({ result }),

      updateScore: (result) =>
        set((state) => ({
          score:
            result === 'user wins'
              ? state.score + 1
              : result === 'computer wins'
                ? Math.max(0, state.score - 1)
                : state.score,
        })),

      resetGame: () =>
        set({
          userChoice: undefined,
          computerChoice: undefined,
          result: undefined,
        }),
    }),
    {
      name: 'game-storage',
      partialize: (state) => ({ score: state.score }),
    },
  ),
)

export const useGameLogic = () => {
  const choices: GameChoice[] = ['rock', 'paper', 'scissors', 'lizard', 'spock']

  const getComputerChoice = (): GameChoice => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
  }

  const determineWinner = (
    userChoice: GameChoice,
    computerChoice: GameChoice,
  ): GameResult => {
    if (!userChoice || !computerChoice) return undefined

    const winningMap: Record<string, GameChoice[]> = {
      rock: ['lizard', 'scissors'],
      paper: ['rock', 'spock'],
      scissors: ['paper', 'lizard'],
      lizard: ['spock', 'paper'],
      spock: ['scissors', 'rock'],
    }

    if (userChoice === computerChoice) return 'tie'
    return winningMap[userChoice].includes(computerChoice)
      ? 'user wins'
      : 'computer wins'
  }

  return {
    choices,
    getComputerChoice,
    determineWinner,
  }
}
