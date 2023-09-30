<template>
  <LoadingVue :active="isLoading">
    <div class="loading-animated" >
        <div class="loading-animated-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
  </LoadingVue>
  <div class="container px-0">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col mb-4" v-for="item in products" :key="item.id">
        <div class=" card product-card w-100 h-100" style="width: 18rem">
          <img
          style=" height: 180px; background-position: center"
            :src="item.imageUrl"
            class="card-img-top cover-fit"
            alt=""
          />
          <div class="card-body p-3">
            <div class="d-flex justify-content-start text-primary fw-bold">
              <p><i class="bi bi-globe me-2"></i>{{ item.category }}</p>
            </div>
            <h5 class="card-title fw-bolder mb-3">{{ item.title }}</h5>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }}</div>
              <del class="h6 text-secondary" v-if="item.price">NTD {{ $filters.currency(item.origin_price) }}</del>
              <div class="h5 text-primary fw-bold" v-if="item.price">NTD {{ $filters.currency(item.price) }}</div>
            </div>
            <div  class="text-end m-auto d-flex justify-content-between align-items-center">
              <button type="button"
              @click.prevent="getProduct(item.id)"
              class="btn btn-outline-primary">
              <i class="bi bi-search"></i>
              </button>
              <button type="button" class="btn btn-outline-primary"
              :disabled="this.status.loadingItem === item.id"
              @click="addCart(item.id)">
                <div v-if="this.status.loadingItem === item.id"
                class="spinner-grow text-primary spinner-grow-sm" role="status">
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

export default {
  data() {
    return {
      products: [],
      product: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  methods: {
    getProducts() {
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
        console.log(error)
      })
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`)
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.status.loadingItem = id
      const cart = {
        product_id: id,
        qty: 1
      }
      this.$http.post(url, { data: cart })
        .then((response) => {
          this.$httpMessageState(response, '加入購物車')
          this.status.loadingItem = ''
          console.log(response)
        }).catch(error => {
        console.log(error)
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>
