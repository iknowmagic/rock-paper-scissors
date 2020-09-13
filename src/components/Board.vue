<template>
  <div class="board">
    <div class="board-bg"></div>
    <div class="icon icon-rock" @click="userSelects('rock')"></div>
    <div class="icon icon-paper" @click="userSelects('paper')"></div>
    <div class="icon icon-scissors" @click="userSelects('scissors')"></div>
    <div class="icon icon-lizard" @click="userSelects('lizard')"></div>
    <div class="icon icon-spock" @click="userSelects('spock')"></div>
  </div>
</template>

<script>
// @flow

import { sync } from 'vuex-pathify'

export default {
  name: 'Board',
  computed: {
    userChoice: sync('game/userChoice')
  },
  methods: {
    userSelects(item: string) {
      this.userChoice = item
    }
  }
}
</script>
