<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70"/>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder banner-title">行程資訊</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="回上一頁" class="text-secondary fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start d-none d-md-block">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-dark hover-nav fw-bold">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/products/全部" class="text-dark hover-nav fw-bold">行程列表</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row d-flex justify-content-center mb-5 mt-4 mt-md-0">
        <article class="col-lg-5">
          <img :src="product.imageUrl" alt="productImage" class="img-fluid mb-3 bg-cover bg-center rounded-2">
        </article>
        <div class="col-lg-7">
          <div class="d-flex justify-content-start text-primary fw-bold">
            <p class="mb-2"><i class="bi bi-globe me-2"></i>{{ product.category }}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="m-0 fw-bold">{{ product.title }}</h4>
            <a href="#" title="我的最愛" @click.prevent="addFavorite(product.id)" class="ps-3 ps-md-0">
              <i class="bi bi-heart text-primary fs-3"  v-if="favoriteData.indexOf(product.id) === -1"></i>
              <i class="bi bi-heart-fill text-primary fs-3" v-else></i>
            </a>
          </div>
          <div class="d-flex align-items-center text-primary mt-2">
            <small class="border border-white bg-light px-2 py-2 rounded-pill me-2 text-nowrap">2人成行</small>
            <small class="border border-white bg-light px-2 py-2 rounded-pill me-2 text-nowrap">贈WIFI</small>
            <small class="border border-white bg-light px-2 py-2 rounded-pill me-2 text-nowrap">多人享優惠</small>
          </div>
          <div class="mt-4 text-primary">
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
        <div class="row d-flex justify-content-center bg-light py-5 my-5 rounded-2">
          <div class="col-lg-6">
            <h4 class="fw-bold text-primary"><i class="bi bi-globe pe-2"></i>行程特色</h4>
            <div class="mt-3" style="line-height: 30px;" v-if="product.content">
              <template v-for="content in product.content.split('\n')" :key="content">
                {{ content }} <br/>
              </template>
            </div>
          </div>
          <div class="col-lg-6 mt-4 mt-lg-0">
            <h4 class="fw-bold text-primary"><i class="bi bi-globe pe-2"></i>行程簡介</h4>
            <div class="mt-3">
              {{ product.description }}
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-center bg-white py-5 mt-2 rounded-2">
          <div class="col-lg-6">
            <h4 class="fw-bold text-primary"><i class="bi bi-exclamation-circle pe-2"></i>注意事項</h4>
            <div class="mt-3">
              <p class="mb-2">1. 本行程一經售出，不得轉讓他人使用。</p>
              <p class="mb-2">2. 本行程報價已包含機場稅與燃油附加費。</p>
              <p class="mb-2">3. 本行程報價未包含旅遊平安保險及旅遊不便險。</p>
              <p class="mb-2">4. 本行程報價未包含每日旅館客房清理及行李小費。</p>
              <p>5. 本行程未包含護照新辦及簽證費用，如有需要代辦，請洽詢專員。</p>
            </div>
          </div>
          <div class="col-lg-6 mt-4 mt-lg-0">
            <h4 class="fw-bold text-primary"><i class="bi bi-exclamation-circle pe-2"></i>改退行程須知</h4>
            <div class="mt-3">
              <p class="mb-2">1. 若欲辦理取消或是更改行程，請務必先洽詢專員。</p>
              <p class="mb-2">2. 未提前取消行程或因個人因素被拒絕入境，將無法申請退費。</p>
              <p class="mb-2">3. 更改行程須依航空公司之規定扣除相關費用外，公司另收取手續費每人 500 元。</p>
              <p class="mb-2">4. 取消行程須依航空公司之規定扣除相關費用外，公司另收取手續費每人 1000 元。</p>
              <p>5. 若遇不可抗力因素如天候異常等導致行程被迫更改或取消，公司不另收取手續費。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" mt-5 bg-white">
      <div class="container">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">熱門行程</h2>
        <Swiper />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Swiper from '@/components/SwiperComponent.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: {
    Navbar,
    Swiper,
    Footer
  },
  data () {
    return {
      product: {},
      products: [],
      qty: 1,
      id: '',
      favoriteData: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false
    }
  },
  watch: {
    $route () {
      if (this.$route.params.productId !== undefined) {
        this.id = this.$route.params.productId
        this.getProduct()
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    addToCart (id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false
        this.$httpMessageState(response, '加入購物車')
        this.emitter.emit('update-cart')
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    addFavorite (id) {
      this.isLoading = true
      const favoriteId = this.favoriteData.indexOf(id)
      if (favoriteId === -1) {
        this.favoriteData.push(id)
        this.emitter.emit('push-message', {
          style: 'primary',
          title: '已加入我的最愛'
        })
      } else {
        this.favoriteData.splice(favoriteId, 1)
        this.emitter.emit('push-message', {
          style: 'secondary',
          title: '已從我的最愛移除'
        })
      }
      setTimeout(() => {
        this.isLoading = false
      }, 300)
      localStorage.setItem('favorite', JSON.stringify(this.favoriteData))
      this.emitter.emit('update-favorite')
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
