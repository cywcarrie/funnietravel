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
  <section class="mt-5">
    <!--首頁封面-->
    <div class="home d-flex justify-content-center align-items-center position-relative">
      <div class="text-center text-light home-content border">
        <h2 class="mb-3 fw-bolder fs-1 text-nowrap">探索美麗的東南亞</h2>
        <h5 class="text-nowrap"><span class="fw-bold fs-4">Funnie</span> 給您輕鬆快樂自由行</h5>
      </div>
      <div class="d-flex flex-column align-items-center text-white mt-5 pt-5 more position-absolute">
        <span class="bounce-out-down">
          <i class="bi bi-chevron-double-down fs-1"></i>
        </span>
      </div>
    </div>
    <!--關於Funnie-->
    <div class="py-5 about" id="about">
      <div class="container">
        <h2 class="text-center fw-bolder mb-5 text-secondary text-nowrap">關於 Funnie Travel</h2>
        <div class="text-center text-white px-3 px-md-5">
          <h3 class="fw-bolder mb-4">東南亞自由行專家</h3>
          <p class="fs-5"><sapn class="fw-bolder fs-4">Funnie Travel</sapn> 是由一群來自台灣各地熱愛自由行，熱愛東南亞的專業團隊所組成，共同致力於提供客戶最優質、最專業與最安全的旅遊行程，讓旅人能夠放心感受旅行的美好。我們深信自由行是最能貼近當地生活及深入地探索當地文化和風土人情的旅遊方式，期望每個熱愛旅行的您，都能與我們一樣，享受自由行的美好。</p>
        </div>
        <div class="text-center pt-3">
          <router-link class="btn btn-outline-secondary btn-lg fw-bold" to="/about">關於我們</router-link>
        </div>
      </div>
    </div>
    <!--地區選單-->
    <div class="py-5 bg-light">
      <div class="container">
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
    <!--Swiper卡片-->
    <div class=" mt-5 bg-white">
      <div class="container">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">熱門行程推薦</h2>
        <Swiper></Swiper>
      </div>
    </div>
    <!--新馬地區-->
    <div class="mt-5 bg-white">
      <div class="container">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Funnie 帶您 HEN 瘋玩新馬</h2>
        <div class="row justify-content-center row-cols-1 row-cols-md-2 row-cols-xl-4">
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-primary cursor-pointer"
            @click.prevent="goToSingapore1">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1694094332918.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PLsEro6qHY%2BPa7TVT%2FeFQI1%2BQwuze%2BeN1Aem0%2Fx%2FsyxQe6myKTKTD17GRjE530lHEq%2BAOYbH5Ys0IhcOSUOc1aD5ohxWB2Hezr%2Brd3J3ZFRCD2nFGiVYhE1lCY4kE32t0diexZAceIcdkFPdGJ0J0q%2B%2FHzCfIJFtYLq8f4Y9enn%2Fxea7DIzbjq10SEu%2BJXqNwJ%2Bj2ynWe35eTByF38g6P6g1hrP0JZX6NcuyI7Inr%2FcLhwVQMRTZgI2clEP1C89PdvNW5UqvdaBHuFTarTxKiPwaZAWYxUOoKhAe1mkIFjblgDGlvVq1jcmOzE6KQouXVlPpTpPz1B5GPI9y3X%2B2BA%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3 bg-light rounded-bottom">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>新加坡</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">環球影城.魚尾獅公園.濱海灣金沙酒店5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 53,900</h6>
                  <h5 class="text-primary fw-bold">NTD 51,900</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-primary cursor-pointer"
            @click.prevent="goToSingapore2">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1693569264194.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DUw5GoJ1fX4aGKkzbKUBPd%2FRbPpXmGl1t8k7qSvlz9A9bUW6UzzZE7b8q2jSmpdoPpsJ3oGg4879ltTqS%2BAtYOtk%2BkRQOYLXKd9T9dW5CU4RDMrtoPSyiaRQSXl%2B%2BdDI%2BWIqNCCiTswutjbfMjQgzv0nQXPPC%2B9Y4IrZ4yV95R4HjjQh0UYrqj6BRieNJiZo07yFDxlQ%2FyIXsb6Z3AcjvIHYVg%2BPAO1fQ3t568pT8SUXLvQhZE2IG89Sdzbze4heqVDwUO5VDvSvy%2BtUsPnDI1dMow%2F3xhmu7%2Bn1xMZixQnij51EKEdWWZtvoeiEXIbutCaMI%2FZAU46WFWypdGog%2Fw%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>新加坡</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">夜間動物園.環球影城.濱海灣金沙酒店5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 51,900</h6>
                  <h5 class="text-primary fw-bold">NTD 49,900</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-primary cursor-pointer"
            @click.prevent="goToMalaysia1">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1694095239254.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OmEqPdCcLB8OtLp1Bl5TCMQe%2BDhxNtJ9Pr6XCSOmLptb56QBle1HPQaAu2HEA8WesLvsWDFrnYUHJbpi4lO8TVYYWZq6waffsbmDh%2BG0d6K%2FZmNPPvEJLTzIs6fKSW2lWTBsFMuOOU4Is6cFlITiek1YB5GkqYWYOFSfb9BzaTSmNUkj6Q%2B6D2%2BUYUtjaosqVzo8JNfE1cXkX5BX0U%2BwAufcskjHU6hm4jRgR%2FkOp57SJZxWoL0vr%2BbyyeXjsLwuO5qBeNWAjKFXKaXX9hGyEaXQUvG6KGouR8qs2lWqFn6RwA%2FbyeVL3%2F5Eo4ei%2B46FtMclMzm2DFsDO1qh4KFiVQ%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3 rounded-bottom bg-light">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>馬來西亞</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">雙子星塔.高空旋轉吧台.大紅花渡假村5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 42,900</h6>
                  <h5 class="text-primary fw-bold">NTD 39,900</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-primary cursor-pointer"
            @click.prevent="goToMalaysia2">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1694513779643.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Li1ut6IAJo1Y0%2BHJKCqtaV7FjMSHAItqUcyRxRVcZWq8BSqtgwF0o6qUhd7iRFqqx0UWxoWRCeP2%2FlggwJkNCTZKQ24l7F8iUjCG8zblbjD5ZO2S38ym1hB%2BeNK8rXB7D4QqcB0veE92esDlaUTjjeCQdDELs3KTs6CTGr1qMFt%2B1R8ckiBQDqnAJA5j313GJTO3FwydLp7pZOMeYqL0SbaDxKc09E8xT%2FmiQtLeH1Br4oeXfbTjm98Biv%2Bpz%2FHhBAmlIUM8X1pa0hrFzcjcHmjYUQqYEXsZQtLiCtImZfx7CYV%2FNBcPdrkQ4hGxodI0vF4t4ixOgqN1JUpxnc%2F55Q%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>馬來西亞</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">莎莎藍天空之境.荷蘭紅屋.大紅花渡假村5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 37,900</h6>
                  <h5 class="text-primary fw-bold">NTD 35,900</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-end mt-4">
          <router-link to='/user/all' class="btn btn-primary rounded-pill">
            更多行程<i class="bi bi-caret-right-fill"></i>
            </router-link>
        </div>
        <!--巴里島泰國-->
        <h2 class="text-center fw-bolder my-5 text-primary text-nowrap">Funnie 帶您 FUN 鬆遊泰峇</h2>
        <div class="row justify-content-center row-cols-1 row-cols-md-2 row-cols-xl-4">
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-secondary cursor-pointer"
            @click.prevent="goToBali1">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1694093191593.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bbYicxdL4Vzgq0LdJCyICL6l4vycQ4mDsQvtV50Jq2BPl5adul6bkHtA5ITMUnnYzRVLTI0a2w5KiPsijlIISnRMTLKrY0PsDdskMwKvOqOvCpCjqF%2BTu9oDWMwQXr%2Fg7BDFMILQCp4bHSi6yugK73wBOwPtQZXWEQ1BX27glQiIeRXRI6alC6w2QdT5fscRMZAIU3pFdxY1bQqWleIiCcQ%2B4E4Hx5HCZUGHYbnVz1dgUZCJdgGzYMpv63CuzRp3s39WmK1xmBeHdVPL7mqOOJaijczJLPJtRvmfIwoLU5SfopIvpvom95pXsPr6hZzUYQp1ceYr7lTeXcMXNGQSdg%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>峇里島</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">藍夢島山林冒險俱樂部.獨棟VILLA5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 35,900</h6>
                  <h5 class="text-primary fw-bold">NTD 32,900</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-secondary cursor-pointer"
            @click.prevent="goToBali2">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1694093178196.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YbuKPdhdTIsabdJTXrmZFnt60N51k7IVf6GfJqCB3%2FbII7hUtAzKu2xqCU2Bi1okGizpW3CHxa3VC0inmrsSt8FHakqRt24dhEhmGARC8%2BI3%2FpUjASn546gbIiMOjArIMT%2BD2l3FkIvXnP%2FrCJ%2FWygUr%2BVwxdpBz5m1jGDSzR%2BLps7CQkr2kRiifNzTuaQuiE72U0mvgY6awTloqameaB4pKmSjWWu6ZMD%2BB5fIB9vlZ7965jAxWclD3rTctEuArSVg2tfrNaAv4QWGeiwKqhZc1cYeuvzfuxt0jYiOnYXYCfngbfcG%2Fd8AoY71Zk0dmoWFQGiy9fLQ1ySWwj4lnTQ%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3 bg-light rounded-bottom">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>峇里島</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">雙SPA.秘境瀑布.超豪華五星級飯店5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 40,500</h6>
                  <h5 class="text-primary fw-bold">NTD 38,500</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-secondary cursor-pointer"
            @click.prevent="goToThailand1">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1693569418972.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JP3TlupazhF8W2YPIpgXEMEUNL4XX%2ByXsvhPhcJSu3SsICNFpmC1%2FChQ%2Fk7xJ5B6cnc4v1LhZfmjX10hy6ehSBaU651wcc%2BA0LnZX0kZ1ke1u6BMV0R06vKuVAi%2Fk5YdP%2FDNo%2FgGv7wAD4jMfn6UWpKxb3KOT8cKyfo20sNPOQBwvibQfoqkauceI%2BqL5CXC5iugk9x0WLv4bZJeUBYQxfwTTJ8buRufph6CtvJUQ52uPz1p2X1mGxrlmvo%2FOrB5NRUzXHCYEtclSKfhPdEg09Wpg49xXHgMX75f5euoCdTJnZ%2BbS2e3kRbIHa6xSrwevfIkmGGtcYvchWfmCGKjOA%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>泰國</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">水上市場.黎明寺.超豪華五星級飯店5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 41,900</h6>
                  <h5 class="text-primary fw-bold">NTD 39,900</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-3 mb-xl-0">
            <div class=" card product-card border border-secondary cursor-pointer"
            @click.prevent="goToThailand2">
              <img
              style=" height: 180px; background-position: center"
                src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1693569481654.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cW0TewEQyGThvIWTGtAgTTpeHhA%2BOFLNphIxjExqHe1Vm5D1J5vPnzhC3tZhxJnTUuN9nuamFelQRsO6mcr6oFuUcghxauZ5tQzpgI%2BBFuxkCG66bQUHoGRD%2FZpPxwbx8pAqfokK2zDmasfIUhl3EXv%2B4dLZ%2FNH12tG270gHtpyvkDt25zxsvmPzt%2B5rCeWkvvvSnXrBHTLmbaYys%2F%2BCEIvRHSphEn5EyGIIzHfhrtmz%2FfHb6dWBAcFz0h6NOFWanSa4rNKLPth06VbGcrW7FpSA3KsPWrAZqtAq15Qrg8JE1M1ordAEyIa5A7SKFhc4aYFc%2FaAH6NljEWtbYOq%2Bhg%3D%3D"
                class="card-img-top cover-fit"
                alt=""
              />
              <div class="card-body p-3 bg-light rounded-bottom">
                <div class="d-flex justify-content-start text-primary fw-bold">
                  <p><i class="bi bi-globe me-2"></i>泰國</p>
                </div>
                <h5 class="card-title fw-bolder mb-3">水上網美咖啡廳.浪漫夜遊湄南河5日</h5>
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="text-secondary text-decoration-line-through"> NTD 30,900</h6>
                  <h5 class="text-primary fw-bold">NTD 28,900</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-end mt-4">
          <router-link to='/user/all' class="btn btn-primary rounded-pill">
            更多行程<i class="bi bi-caret-right-fill"></i>
            </router-link>
        </div>
      </div>
    </div>
    <!--Funnie-->
    <div class="py-5 mt-5 home-bottom-content">
      <div class="container">
        <h2 class="text-center fw-bolder py-3 text-secondary">旅行是唯一讓我們花錢，心靈卻變得更富有的事物</h2>
        <div class="text-center text-white px-3 px-md-5">
          <p class="fw-bolder py-3 fs-3">跟著 <span class="fs-2">Funnie</span> 一起去美麗的東南亞自由行，享受自由行帶給我們的美好</p>
        </div>
      </div>
    </div>
    <ScrollTop></ScrollTop>
  </section>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Swiper from '@/components/SwiperComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  data() {
    return {
      isLoading: false
    }
  },
  components: {
    Navbar,
    Swiper,
    Footer,
    ScrollTop
  },
  methods: {
    goToSingapore1() {
      const id = '-NdF_zAaX7EIHjpiuFmi'
      this.$router.push(`/product/${id}`)
    },
    goToSingapore2() {
      const id = '-NdFa9XRWdyRt4EL0u9w'
      this.$router.push(`/product/${id}`)
    },
    goToMalaysia1() {
      const id = '-NdF_CQJGah9qEDUT44M'
      this.$router.push(`/product/${id}`)
    },
    goToMalaysia2() {
      const id = '-Ne7tYXfyqwaWoIxEFhQ'
      this.$router.push(`/product/${id}`)
    },
    goToBali1() {
      const id = '-NdFcUyionc83V6dRqJp'
      this.$router.push(`/product/${id}`)
    },
    goToBali2() {
      const id = '-NdFcLuit1XorjOdQPMX'
      this.$router.push(`/product/${id}`)
    },
    goToThailand1() {
      const id = '-NdFanLb69Udsf8cmmKt'
      this.$router.push(`/product/${id}`)
    },
    goToThailand2() {
      const id = '-NdFb0fC_sh11TGVcNqP'
      this.$router.push(`/product/${id}`)
    }
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
