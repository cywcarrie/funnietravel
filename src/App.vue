<template>
  <ToastMessages></ToastMessages>
  <router-view/>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'

export default {
  components: {
    ToastMessages
  },
  provide() {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss">
@import "./assets/all";
</style>
