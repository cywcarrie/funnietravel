<template>
  <Navbar></Navbar>
  <LoadingVue :active="isLoading">
  <div class="loading-animated" >
      <div class="loading-animated-icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingVue>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bold">行程資訊</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="回上一頁" class="text-primary hover-nav fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start d-none d-md-block">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/user/all" class="text-primary hover-nav fw-bold">行程列表</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row d-flex justify-content-center mb-5 mt-4 mt-md-0">
        <article class="col-lg-5">
          <img :src="product.imageUrl" alt="" class="img-fluid mb-3 bg-cover bg-center rounded-2">
        </article>
        <div class="col-lg-7">
          <div class="d-flex justify-content-start text-primary fw-bold">
            <p class="mb-2"><i class="bi bi-globe me-2"></i>{{ product.category }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="m-0 fw-bold">{{ product.title }}</h4>
            <a href="#" title="我的最愛" @click.prevent="addFavorite(product.id)">
              <i class="bi bi-heart text-primary fs-4" v-if="favoriteData.indexOf(product.id) === -1"></i>
              <i class="bi bi-heart-fill text-primary fs-4" v-else></i>
            </a>
          </div>
          <div class="mt-2">{{ product.description }}</div>
          <div class="mt-3 text-primary">
            <p class="mb-2 fw-bold"><i class="bi bi-airplane-fill pe-2"></i>台北高雄皆可出發</p>
            <p class="mb-2 fw-bold"><i class="bi bi-taxi-front-fill pe-2"></i>提供免費機場接送</p>
            <p class="mb-2 fw-bold"><i class="bi bi-check-circle-fill pe-2"></i>可以延回或是續住</p>
            <p class="fw-bold"><i class="bi bi-clock-fill pe-2"></i>24小時內確認訂單</p>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <div class="h5 text-secondary" v-if="!product.price">NTD {{  $filters.currency(product.origin_price) }}</div>
            <del class="h6 text-secondary" v-if="product.price">NTD {{ $filters.currency(product.origin_price) }}</del>
            <div class="h5 ms-2 text-primary fw-bold" v-if="product.price">NTD {{ $filters.currency(product.price) }}</div>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <div class="input-group mb-5" style="width:210px">
              <input type="number" class="form-control border-primary" v-model.number="qty" min="1">
              <button type="button" class="btn btn-primary" @click="addToCart(product.id, qty)">
                <i class="bi bi-cart-fill pe-1"></i>加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      product: {},
      products: [],
      qty: 1,
      id: '',
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        console.log(response.data)
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      }).catch(error => {
        console.log(error)
      })
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, '加入購物車')
        // this.$router.push('/user/all')
      }).catch(error => {
        console.log(error)
      })
    },
    addFavorite(id) {
      this.isLoading = true
      const favoiteId = this.favoriteData.indexOf(id)
      if (favoiteId === -1) {
        this.favoriteData.push(id)
        this.emitter.emit('push-message', {
            style: 'primary',
            title: '已加入我的最愛'
          })
      } else {
        this.favoriteData.splice(favoiteId, 1)
        this.emitter.emit('push-message', {
            style: 'secondary',
            title: '已從我的最愛移除'
          })
      }
      setTimeout(() => {
        this.isLoading = false
      }, 300)
      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
    }
  },
  created() {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
