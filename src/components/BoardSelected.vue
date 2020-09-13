<template>
  <div
    class="board-selected"
    :class="{ 'results-are-in': userChoice && computerChoice }"
  >
    <div class="selections">
      <div class="selection-box">
        <div class="icon" :class="{ winner: result && result === 'user wins' }">
          <div
            :class="['icon-user', userChoice ? `icon-${userChoice} ` : ``]"
          ></div>
        </div>
        <div class="selection-text">You picked</div>
      </div>
      <div class="selection-box">
        <div
          class="icon"
          :class="{ winner: result && result === 'computer wins' }"
        >
          <div
            :class="[
              'icon-computer',
              computerChoice
                ? `icon-computer-selected icon-${computerChoice} `
                : ``
            ]"
          ></div>
        </div>
        <div class="selection-text computer-text">The house picked</div>
      </div>
    </div>
    <div v-if="userChoice && computerChoice" class="results">
      <div v-if="result === 'user wins'" class="results-text">You win</div>
      <div v-if="result === 'computer wins'" class="results-text">You lose</div>
      <div v-if="result === 'tie'" class="results-text">It's a tie</div>
      <div class="play-again" @click="playAgain">Play again</div>
    </div>
  </div>
</template>

<script>
// @flow

import { sync } from 'vuex-pathify'
import _random from 'lodash/random'
import _includes from 'lodash/includes'
import sleep from '@/helpers/sleep'

export default {
  name: 'BoardSelected',
  data() {
    return {
      choices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
      computerChoice: undefined,
      result: undefined
    }
  },
  computed: {
    userChoice: sync('game/userChoice'),
    score: sync('game/score')
  },
  mounted() {
    this.init()
  },

  methods: {
    async init() {
      await sleep(500)
      const computerChoice = this.computerSelection()
      const result = this.compareResults(this.userChoice, computerChoice)
      this.computerChoice = computerChoice
      this.result = result
      if (this.result === 'tie') return
      this.score = this.result === 'user wins' ? this.score + 1 : this.score - 1
    },

    computerSelection() {
      const numericChoice = _random(0, this.choices.length - 1)
      return this.choices[numericChoice]
    },
    compareResults(userChoice: string, computerChoice: string) {
      const winningMap = {
        rock: ['lizard', 'scissors'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard'],
        lizard: ['spock', 'paper'],
        spock: ['scissors', 'rock']
      }
      if (_includes(winningMap[userChoice], computerChoice)) return 'user wins'
      if (userChoice === computerChoice) return 'tie'
      return 'computer wins'
    },
    playAgain() {
      this.userChoice = undefined
    }
  }
}
</script>
