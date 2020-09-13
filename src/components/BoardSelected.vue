<template>
  <div class="board-selected">
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
        <div class="icon">
          <div
            :class="[
              'icon-computer',
              computerChoice
                ? `icon-computer-selected icon-${computerChoice} `
                : ``
            ]"
          ></div>
        </div>
        <div class="selection-text">The house picked</div>
      </div>
    </div>
    <div class="results">
      <div class="results-text">You win</div>
      <div class="play-again">Play again</div>
    </div>
  </div>
</template>

<script>
// @flow

import { get } from 'vuex-pathify'
import _random from 'lodash/random'
import sleep from '@/helpers/sleep'

export default {
  name: 'BoardSelected',
  data() {
    return {
      choices: ['rock', 'spock', 'paper', 'lizard', 'scissors'],
      computerChoice: undefined,
      result: undefined
    }
  },
  computed: {
    userChoice: get('game/userChoice')
  },
  mounted() {
    // this.init()
  },

  methods: {
    async init() {
      await sleep(1000)
      this.computerChoice = this.computerSelection()
      await sleep(1000)
      this.result = this.compareResults(this.userChoice, this.computerChoice)
      console.log(this.result)
    },

    computerSelection() {
      const numericChoice = _random(0, this.choices.length - 1)
      return this.choices[numericChoice]
    },
    compareResults(userChoice: string, computerChoice: string) {
      /**
       * From: https://stackoverflow.com/questions/17976883/rock-paper-scissors-in-javascript
       */

      var choices = this.choices
      var map = {}

      choices.forEach(function (choice, i) {
        map[choice] = {}
        for (
          var j = 0, half = (choices.length - 1) / 2;
          j < choices.length;
          j++
        ) {
          var opposition = (i + j) % choices.length
          if (!j) map[choice][choice] = 'Was a tie'
          else if (j <= half) map[choice][choices[opposition]] = 'user wins'
          else map[choice][choices[opposition]] = 'computer wins'
        }
      })

      function compare(choice1, choice2) {
        return (map[choice1] || {})[choice2] || 'invalid choice'
      }

      return compare(userChoice, computerChoice)
    }
  }
}
</script>
