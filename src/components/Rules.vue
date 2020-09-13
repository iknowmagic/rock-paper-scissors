<template>
  <div class="rules">
    <div class="btn-rules" @click="showModal = !showModal">rules</div>

    <transition>
      <div v-if="showModal" class="rules-modal">
        <div class="modal-title">rules</div>
        <div class="modal-image">
          <img src="@/assets/images/image-rules-bonus.svg" alt="rules" />
        </div>
        <div class="modal-close" @click="showModal = false">
          <img src="@/assets/images/icon-close.svg" alt="rules" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// @flow

export default {
  name: 'Rules',
  data() {
    return {
      showModal: false
    }
  }
}
</script>
