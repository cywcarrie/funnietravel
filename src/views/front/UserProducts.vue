<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70"/>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder banner-title">行程列表</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-dark hover-nav fw-bold">首頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">行程列表</li>
        </ol>
      </nav>
      <div class="row my-5">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div class="list-group text-start">
            <button
            type="button"
            class="list-group-item list-group-item-action fw-bold"
            aria-current="true"
            :class="{ active: category === '全部' }"
            @click.prevent="goToCategory('全部')">
            <i class="bi bi-globe me-2 "></i>
            全部
            </button>
            <button
            type="button"
            class="list-group-item list-group-item-action fw-bold"
            :class="{ active: category === '峇里島' }"
            @click.prevent="goToCategory('峇里島')">
            <i class="bi bi-globe me-2 "></i>
            峇里島
            </button>
            <button
            type="button"
            class="list-group-item list-group-item-action fw-bold"
            :class="{ active: category === '泰國' }"
            @click.prevent="goToCategory('泰國')">
            <i class="bi bi-globe me-2 "></i>
            泰國
            </button>
            <button
            type="button"
            class="list-group-item list-group-item-action fw-bold"
            :class="{ active: category === '新加坡' }"
            @click.prevent="goToCategory('新加坡')">
            <i class="bi bi-globe me-2 "></i>
            新加坡
            </button>
            <button
            type="button"
            class="list-group-item list-group-item-action fw-bold"
            :class="{ active: category === '馬來西亞' }"
            @click.prevent="goToCategory('馬來西亞')">
            <i class="bi bi-globe me-2 "></i>
            馬來西亞
            </button>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="row mb-3 mb-lg-4">
            <div class="col-12">
              <div class="rounded products-all"
              :style="`
              background-image: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),
              url(${categorysArt[category].img});`">
                <h2 class="text-white fw-bolder fs-1 pt-4 ps-4">{{ category }}</h2>
                <p class="text-white fw-bolder fs-5 px-4">{{ categorysArt[category].describe }}</p>
              </div>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div class="col mb-4" v-for="item in products" :key="item.id">
              <div class="card product-card w-100 h-100" style="width: 18rem">
                <router-link class="" :to="`/product/${item.id}`">
                  <div class="product-img cursor-pointer" @click="getProduct(item.id)">
                    <img
                    style=" height: 180px; background-position: center"
                    :src="item.imageUrl"
                    class="card-img-top object-fit-cover"
                    alt="allProuctsImages"/>
                    <span class="seemore-text d-flex justify-content-center align-items-center text-white">
                      <i class="bi bi-search pe-1"></i>
                      查看更多
                    </span>
                  </div>
                  <div class="card-body p-3">
                    <div class="d-flex justify-content-start text-primary fw-bold">
                      <p><i class="bi bi-globe me-2"></i>{{ item.category }}</p>
                    </div>
                    <h5 class="card-title fw-bolder mb-3 text-primary">{{ item.title }}</h5>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                      <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }} </div>
                      <del class="h6 text-secondary" v-if="item.price">NTD {{ $filters.currency(item.origin_price) }} </del>
                      <div class="h5 text-primary fw-bold" v-if="item.price"> NTD {{ $filters.currency(item.price) }} </div>
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
          <Pagination
          :pages="pagination"
          @emit-pages="getProducts" />
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Pagination from '@/components/PaginationComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import categoryObjectData from '@/data/categoryObjectData'

export default {
  components: {
    Navbar,
    Pagination,
    Footer
  },
  data () {
    return {
      product: {},
      products: [],
      category: '',
      categorysArt: categoryObjectData,
      pagination: {},
      isLoading: false,
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  inject: ['emitter'],
  watch: {
    $route () {
      if (this.$route.name === 'products') {
        this.category = this.$route.params.category
        this.getProducts()
      }
    }
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      if (this.category !== '全部') {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      }
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          if (this.category !== '全部') {
            this.products = response.data.products.filter(item => item.category === this.category)
            const perPageItem = 5
            const totalPage = Math.ceil(this.products.length / perPageItem)
            const start = (page - 1) * perPageItem
            const end = page * perPageItem
            this.products = this.products.slice(start, end)
            this.pagination = {
              category: null,
              current_page: page,
              has_next: page < totalPage,
              has_pre: page !== 1,
              total_pages: totalPage
            }
          } else {
            this.products = response.data.products
            this.pagination = response.data.pagination
          }
        }
        this.isLoading = false
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    goToCategory (category) {
      this.$router.push(`/products/${category}`)
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
          this.emitter.emit('update-cart')
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
    this.category = this.$route.params.category
    this.getProducts()
  }
}
</script>
