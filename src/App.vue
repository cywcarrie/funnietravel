<template>
  <ToastMessages />
  <router-view/>
  <ScrollTop />
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import ScrollTop from '@/components/ScrollTop.vue'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/js/bootstrap.bundle'

export default {
  components: {
    ToastMessages,
    ScrollTop
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
