<template>
  <ToastMessages></ToastMessages>
  <router-view/>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import 'bootstrap/dist/js/bootstrap.bundle'

export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
