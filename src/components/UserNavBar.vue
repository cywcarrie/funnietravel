<template>
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70" />
  <div class="fixed-top">
    <div class="bg-secondary py-1">
      <div class="container">
        <Vue3Marquee
        class="container text-dark text-center fw-bold"
        :pause-on-hover="true">
          <span class="navbar-marquee">
            開幕慶期間結帳時輸入優惠碼<span class="text-white"> funnietravel</span>，即可享 <span class="text-white">85</span> 折優惠 !
          </span>
          <span class="navbar-marquee">
            開幕慶期間結帳時輸入優惠碼<span class="text-white"> funnietravel</span>，即可享 <span class="text-white">85</span> 折優惠 !
          </span>
        </Vue3Marquee>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <RouterLink to="/" class="navbar-brand me-auto d-flex align-items-center"
            ><img src="../assets/img/logo.png" alt="funnie-logo" class="funnie-logo-img"/><h1 class="logo text-primary fs-2 fw-bolder mb-0 px-2 me-5">Funnie</h1></RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">關於我們</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products/全部" class="nav-link">行程列表</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/favorite" class="nav-link">我的最愛</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/faqs" class="nav-link">常見問題</RouterLink>
            </li>
          </ul>
          <form class="form-inline d-flex justify-content-center">
            <RouterLink to="/cart" class="nav-link text-primary hover-nav position-relative">購物車<i class="bi bi-cart-fill fs-4 ps-1"></i>
          <span class="badge text-white bg-danger position-absolute d-flex d-none d-lg-block navbar-badge-position" v-if="cart.length > 0">{{ cart.length }}</span>
          </RouterLink>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
  data () {
    return {
      isLoading: false,
      cart: {},
      collapse: {}
    }
  },
  components: {
    Vue3Marquee
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
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
    this.emitter.on('update-cart', () => {
      this.getCart()
    })
  },
  unmounted () {
    this.emitter.off('update-cart')
  }
}
</script>
