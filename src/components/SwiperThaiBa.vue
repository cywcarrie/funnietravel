<template>
  <LoadingVue :active="isLoading">
    <LoadingComponent></LoadingComponent>
  </LoadingVue>
   <swiper
    class="pb-5"
    :modules="modules"
    :slides-per-view="1"
    :space-between="20"
    navigation
    :breakpoints="{
      '480': {
        slidesPerView: 1.5,
      },
      '576': {
        slidesPerView: 1.5,
      },
      '768': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 3,
      },
      '1200': {
        slidesPerView: 4,
      },
    }"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <router-link :to="`/product/${item.id}`">
        <div class=" card product-card box-shadow w-100 h-100" style="width: 18rem">
          <img
          style=" height: 180px; background-position: center"
            :src="item.imageUrl"
            class="card-img-top object-fit-cover"
            alt=""
          />
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
          </div>
        </div>
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script>
import LoadingComponent from '@/components/LoadingComponent.vue'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide,
    LoadingComponent
  },
  data () {
    return {
      isLoading: false,
      products: [],
      modules: [Navigation]
    }
  },
  methods: {
    getProducts () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          response.data.products.forEach((item) => {
            if (item.category === '泰國' || item.category === '峇里島') {
              this.products.push(item)
            }
          })
          this.getSwiper()
        }
      })
    },
    // 隨機取6筆資料
    getSwiper () {
      const randomSwiper = []
      for (let i = 0; i < 6; i += 1) {
        const num = Math.floor(Math.random() * this.products.length)
        randomSwiper.push(this.products[num])
        this.products.splice(num, 1)
      }
      this.products = randomSwiper
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
