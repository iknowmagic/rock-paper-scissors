# Rock Paper Scissors Lizard Spock Game

A React implementation of the expanded Rock Paper Scissors game from The Big Bang Theory, ported from a Vue.js codebase.

## Project Overview

This project is a React/TypeScript port of a Vue.js Rock Paper Scissors Lizard Spock game. The implementation prioritizes maintaining the exact same layout, styling, and user experience from the original Vue application.

## Key Features

- Standard CSS instead of TailwindCSS for accurate style reproduction
- Zustand for state management (replacing Vuex)
- Game logic moved from Vue components to React hooks
- Responsive design that matches the original exactly

## Game Rules

This game expands on the traditional Rock Paper Scissors with two additional moves:

- Rock crushes Scissors and crushes Lizard
- Paper covers Rock and disproves Spock
- Scissors cuts Paper and decapitates Lizard
- Lizard poisons Spock and eats Paper
- Spock smashes Scissors and vaporizes Rock

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
├── public/
│   └── assets/
│       └── images/       # Game icons and images
├── src/
│   ├── components/
│   │   ├── Board.tsx           # Game board with options
│   │   ├── BoardSelected.tsx   # Game result display
│   │   ├── GameHeader.tsx      # Score header
│   │   └── Rules.tsx           # Rules modal
│   ├── pages/
│   │   └── Home.tsx            # Main game page
│   ├── store/
│   │   └── useGameStore.tsx    # Zustand store
│   ├── App.tsx                 # Main app component
│   ├── main.css                # All styles for the game
│   └── main.tsx                # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Notable Changes from Vue Version

1. Replaced Vuex with Zustand for simpler state management
2. Moved from SCSS to regular CSS with identical styling
3. Implemented game logic directly in React components with hooks
4. Maintained exact positioning and layout of elements
5. Recreated all transitions and animations

## Assets

All images and icons are stored in the `public/assets/images` directory and are referenced in the same way as the original Vue application.

## How To Play

1. Choose one of the five options: Rock, Paper, Scissors, Lizard, or Spock
2. The computer will randomly select its choice
3. Winner is determined based on the game rules
4. Score is updated: +1 for winning, -1 for losing
5. Click "Play Again" to start a new round
