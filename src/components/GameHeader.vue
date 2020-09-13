<template>
  <div class="header">
    <div class="header-logo">
      <img src="@/assets/images/logo-bonus.svg" alt="logo" />
    </div>
    <div class="header-score">
      <div class="score-text">score</div>
      <div class="score-number">{{ score }}</div>
    </div>
  </div>
</template>

<script>
// @flow

import { get } from 'vuex-pathify'

export default {
  name: 'GameHeader',
  computed: {
    score: get('game/score')
  }
}
</script>
