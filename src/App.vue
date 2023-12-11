<template>
  <ToastMessages></ToastMessages>
  <router-view/>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/js/bootstrap.bundle'

export default {
  components: {
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  // AOS
  mounted () {
    AOS.init()
  }
}
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
