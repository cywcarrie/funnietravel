<template>
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70"/>
  <div class="container px-0">
    <div class="row mb-3 mb-lg-4">
      <div class="col-12">
        <div class="rounded products-all products-sinma">
          <h2 class="text-white fw-bolder fs-1 pt-4 ps-4 mb-3">新加坡</h2>
          <p class="text-white fw-bolder fs-5 px-4">獨一無二的新加坡，是個美麗的花園城市，充滿多元文化色彩，匯集世界各國的美食佳餚，更是免稅的購物天堂。</p>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col mb-4" v-for="item in products" :key="item.id">
        <div class="card product-card w-100 h-100" style="width: 18rem">
          <router-link :to="`/product/${item.id}`">
            <div class="product-img cursor-pointer" @click="getProduct(item.id)">
              <img
              style=" height: 180px; background-position: center"
              :src="item.imageUrl"
              class="card-img-top object-fit-cover"
              alt="singaporePictures"/>
              <span class="seemore-text d-flex justify-content-center align-items-center text-white">
                <i class="bi bi-search pe-1"></i>
                查看更多
              </span>
            </div>
            <div class="card-body p-3">
              <div class="d-flex justify-content-start text-primary fw-bold">
                <p><i class="bi bi-globe me-2"></i>{{ item.category }}</p>
              </div>
              <h5 class="card-title fw-bolder text-primary mb-3">{{ item.title }}</h5>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }}</div>
                <del class="h6 text-secondary" v-if="item.price">NTD {{ $filters.currency(item.origin_price) }}</del>
                <div class="h5 text-primary fw-bold" v-if="item.price">NTD {{ $filters.currency(item.price) }}</div>
              </div>
            </div>
          </router-link>
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
</template>

<script>

export default {
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
            if (item.category === '新加坡') {
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
