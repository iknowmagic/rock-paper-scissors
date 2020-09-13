<template>
  <div class="game">
    <game-header />
    <board />
    <board-result />
    <rules />
  </div>
</template>

<script>
// @flow

import GameHeader from '@/components/GameHeader'
import Board from '@/components/Board'
import Rules from '@/components/Rules'

export default {
  name: 'Home',
  components: {
    GameHeader,
    Board,
    Rules
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
