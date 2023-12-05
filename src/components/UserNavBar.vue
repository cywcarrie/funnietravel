<template>
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand me-auto d-flex align-items-center"
          ><img src="../assets/img/logo.png" alt="funnie-logo"
          style ="height:40px;"/><h1 class="logo text-primary fs-2 fw-bolder mb-0 px-2 me-5">Funnie</h1></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/about"  class="nav-link"
        >關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/all"  class="nav-link"
        >行程列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorite"  class="nav-link"
        >我的最愛</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faqs"  class="nav-link"
        >常見問題</router-link>
          </li>
        </ul>
        <form class="form-inline d-flex justify-content-center">
          <router-link to="/cart"  class="nav-link text-primary hover-nav position-relative"
        >購物車<i class="bi bi-cart-fill fs-4 ps-1"></i>
        <span class="badge text-white bg-danger position-absolute d-flex d-none d-lg-block" v-if="cart.length > 0" style="top:-6px; right:-11px;">{{ cart.length }}</span>
        </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue'

export default {
  components: { LoadingComponent },
  data () {
    return {
      isLoading: false,
      cart: {},
      collapse: {}
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        // console.log(response)
        this.cart = response.data.data.carts
        this.isLoading = false
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    }
  },
  mounted () {
    this.getCart()
    this.emitter.on('updatecart', () => {
      this.getCart()
    })
  },
  unmounted () {
    this.emitter.off('updatecart')
  }
}
</script>
