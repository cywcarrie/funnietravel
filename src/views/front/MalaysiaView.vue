<template>
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col mb-4" v-for="item in products" :key="item.id">
        <div class="card product-card box-shadow w-100 h-100" style="width: 18rem">
          <div class="product-img cursor-pointer" @click="getProduct(item.id)">
            <img
            style=" height: 180px; background-position: center"
            :src="item.imageUrl"
            class="card-img-top object-fit-cover"
            alt="malaysiaPictures"/>
            <span class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold">
              <i class="bi bi-search pe-1"></i>
              See More
            </span>
          </div>
          <div class="card-body p-3">
            <div class="d-flex justify-content-start text-primary fw-bold">
              <p><i class="bi bi-globe me-2"></i>{{ item.category }}</p>
            </div>
            <h5 class="card-title fw-bolder mb-3">{{ item.title }}</h5>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }}</div>
              <del class="h6 text-secondary" v-if="item.price"> NTD {{ $filters.currency(item.origin_price) }}</del>
              <div class="h5 text-primary fw-bold" v-if="item.price"> NTD {{ $filters.currency(item.price) }}</div>
            </div>
            <div class="card-footer border-0 bg-transparent pt-0 pb-3">
              <button type="button" class="btn btn-outline-primary w-100"
              :disabled="this.status.loadingItem === item.id"
              @click="addCart(item.id)">
                <div v-if="this.status.loadingItem === item.id"
                class="spinner-border text-primary spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                <i class="bi bi-cart-fill"></i>
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingComponent from '@/components/LoadingComponent.vue'

export default {
  components: {
    LoadingComponent
  },
  data () {
    return {
      products: [],
      product: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          response.data.products.forEach((item) => {
            if (item.category === '馬來西亞') {
              this.products.push(item)
            }
          })
          this.isLoading = false
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    addCart (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then((response) => {
          this.$httpMessageState(response, '加入購物車')
          this.emitter.emit('updatecart')
          this.status.loadingItem = ''
          // console.log(response)
        }).catch(error => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `${error.response.data.message}`
          })
        })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
