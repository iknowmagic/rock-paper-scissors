<template>
  <div class="game">
    <game-header />
    <board v-if="!userChoice" />
    <board-selected v-if="userChoice" />
    <rules />
  </div>
</template>

<script>
// @flow

import GameHeader from '@/components/GameHeader'
import Board from '@/components/Board'
import BoardSelected from '@/components/BoardSelected'
import Rules from '@/components/Rules'

import { get } from 'vuex-pathify'

export default {
  name: 'Home',
  components: {
    GameHeader,
    Board,
    BoardSelected,
    Rules
  },
  computed: {
    userChoice: get('game/userChoice')
  }
}
</script>
