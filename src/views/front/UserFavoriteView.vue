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
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bold">我的最愛</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="回上一頁" class="text-primary hover-nav fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/user/all" class="text-primary hover-nav fw-bold">行程列表</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">我的最愛</li>
        </ol>
      </nav>
      <template v-if="favoriteProduct.length!==0">
        <div class="d-flex justify-content-center mt-5">
        <h1 class="fs-2 fw-bold">我的最愛清單</h1>
        </div>
        <div class="row my-5 bg-light rounded-2 py-3">
          <div class="col table-responsive mt-4 mb-4">
            <table class="table align-middle text-center table-light table-borderless">
              <thead class="table-secondary">
                <tr>
                  <th></th>
                  <th class="text-nowrap">行程名稱</th>
                  <th class="text-nowrap">價格</th>
                  <th></th>
                </tr>
              </thead>
              <tbody class="text-center">
              <tr class="table-nowrap"  v-for="item in favoriteProduct" :key="item.id">
                <td style="width: 200px">
                <div class="m-auto rounded-2" style="height: 100px; background-size: cover; background-position: center center"
                    :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
                </td>
                <td class="text-nowrap fw-bold text-primary">{{ item.title }}</td>
                <td class="text-nowrap">
                  <div class="h5 text-secondary" v-if="!item.price">NTD {{ $filters.currency(item.origin_price) }} </div>
                  <del class="h6 text-secondary" v-if="item.price">NTD {{ $filters.currency(item.origin_price) }} </del>
                  <div class="h5 text-primary" v-if="item.price">NTD {{ $filters.currency(item.price) }} </div>
                </td>
                <td class="text-nowrap">
                  <button type="button" class="btn btn-outline-primary"
                          @click="getProduct(item.id)">
                          <i class="bi bi-search"></i>
                    查看更多
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="text-end mt-4 mb-5">
          <router-link class="btn btn-primary ms-auto text-end hover-btn" to="/cart">前往購物車<i class="bi bi-cart-fill ps-1"></i></router-link>
        </div>
      </template>
      <template v-else>
        <div class="py-5 mb-5">
          <div class="text-center pt-4">
            <h2 class="fw-bold mb-5">您尚未有行程加入我的最愛</h2>
            <router-link class="btn btn-primary btn-lg fw-bold" to="/user">馬上開始瀏覽行程吧 !</router-link>
          </div>
        </div>
      </template>
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
      isLoading: false,
      products: [],
      favoriteProduct: [],
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || []
    }
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.products = response.data.products
        this.getFavorite()
        console.log('products:', response)
        this.isLoading = false
      }).catch(error => {
        console.log(error)
      })
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`)
    },
    getFavorite () {
      this.favoriteProduct = this.products.filter(item => this.favoriteData.indexOf(item.id) !== -1)
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
