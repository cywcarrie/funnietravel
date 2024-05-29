<template>
  <div class="toast-container position-fixed pe-3 end-0 toast-position">
    <Toast v-for="(msg, index) in messages" :key="index"
      :msg="msg"
    />
  </div>
</template>

<script>
import Toast from '@/components/ToastComponent.vue'
export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
