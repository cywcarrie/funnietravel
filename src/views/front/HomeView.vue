<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70"/>
  <section>
    <div class="home d-flex justify-content-center align-items-center position-relative">
      <div class="text-center text-light home-content border" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50">
        <h2 class="mb-3 fw-bolder fs-1 text-nowrap">探索美麗的東南亞</h2>
        <h5 class="text-nowrap"><span class="fw-bold fs-4">Funnie</span> 給您輕鬆快樂自由行</h5>
      </div>
      <div class="d-flex flex-column align-items-center text-white mt-5 pt-5 more position-absolute" data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="50">
        <router-link class="btn btn-primary fw-bold px-5 py-2 rounded-0 border border-white" to="/user/all">瀏覽行程</router-link>
      </div>
    </div>
    <div class="py-5 about" id="about">
      <div class="container py-3">
        <h2 class="text-center fw-bolder mb-5 text-secondary text-nowrap">關於 Funnie Travel</h2>
        <div class="text-center text-white px-3 px-md-5">
          <h3 class="fw-bolder mb-4">東南亞自由行專家</h3>
          <p class="fs-5"><span class="fw-bolder fs-4">Funnie Travel</span> 是由一群來自台灣各地熱愛自由行，熱愛東南亞的專業團隊所組成，共同致力於提供客戶最優質、最專業與最安全的旅遊行程，讓旅人能夠放心感受旅行的美好。我們深信自由行是最能貼近當地生活及深入地探索當地文化和風土人情的旅遊方式，期望每個熱愛旅行的您，都能與我們一樣，享受自由行的美好。</p>
        </div>
        <div class="text-center pt-3">
          <router-link class="btn btn-outline-secondary fw-bold" to="/about">關於我們</router-link>
        </div>
      </div>
    </div>
    <div class="py-5 bg-light">
      <div class="container py-3">
        <div class="row justify-content-center">
          <div class="col-md-3 col-sm-6">
            <router-link to="/user/singapore" class="mr-auto ml-auto mb-2 homebtn-img homebtn-img1 d-flex align-items-center justify-content-center rounded-2">
              <h2 class="text-light position-absolute">
                新加坡
              </h2>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-6">
            <router-link to="/user/malaysia" class="mr-auto ml-auto mb-2 homebtn-img homebtn-img2 d-flex align-items-center justify-content-center rounded-2">
              <h2 class="text-light position-absolute">
                馬來西亞
              </h2>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-6">
            <router-link to="/user/thailand" class=" mr-auto ml-auto mb-2 homebtn-img homebtn-img3 d-flex align-items-center justify-content-center rounded-2">
              <h2 class="text-light position-absolute">
                泰國
              </h2>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-6">
            <router-link to="/user/bali" class=" mr-auto ml-auto mb-2 homebtn-img homebtn-img4 d-flex align-items-center justify-content-center rounded-2">
              <h2 class="text-light position-absolute">
                峇里島
              </h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class=" mt-5 bg-white">
      <div class="container py-3">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">熱門行程推薦</h2>
        <Swiper />
      </div>
    </div>
    <div class=" mt-5 bg-white">
      <div class="container py-3">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Funnie 帶您 HEN 瘋玩新馬</h2>
        <SwiperSinga />
        <div class="text-end">
          <router-link to='/user/all' class="btn btn-primary rounded-pill">
          更多行程<i class="bi bi-caret-right-fill"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class=" mt-5 bg-white">
      <div class="container py-3">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Funnie 帶您 FUN 鬆遊泰峇</h2>
        <SwiperBali />
        <div class="text-end">
          <router-link to='/user/all' class="btn btn-primary rounded-pill">
          更多行程<i class="bi bi-caret-right-fill"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="py-5 mt-5 home-bottom-content">
      <div class="container py-3">
        <h2 class="text-center fw-bolder py-3 text-secondary">旅行是唯一讓我們花錢，心靈卻變得更富有的事物</h2>
        <div class="text-center text-white px-3 px-md-5">
          <p class="fw-bolder py-3 fs-3">跟著 <span class="fs-2">Funnie</span> 一起去美麗的東南亞自由行，享受自由行帶給我們的美好</p>
        </div>
      </div>
    </div>
    <ScrollTop />
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Swiper from '@/components/SwiperComponent.vue'
import SwiperSinga from '@/components/SwiperSingaMalay.vue'
import SwiperBali from '@/components/SwiperThaiBa.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Navbar,
    Swiper,
    SwiperSinga,
    SwiperBali,
    Footer,
    ScrollTop
  }
}
</script>
