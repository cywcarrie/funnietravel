<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70" />
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder banner-title">關於我們</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="回上一頁" class="text-secondary fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/" class="text-dark hover-nav fw-bold">首頁</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">關於我們</li>
        </ol>
      </nav>
      <h2 class="text-center fw-bold text-primary mt-5">關於 <span class="fw-bolder text-secondary"> Funnie Travel</span></h2>
      <div class="row d-flex align-items-center mt-4 py-5">
        <div class="col-md-6 p-4">
          <img src="https://i.imgur.com/WvHZq6P.jpg" alt="關於我們" class="img-fluid">
        </div>
        <div class="col-md-6 mt-3">
          <p class="fs-5 lh-lg px-3"><span class="fw-bold fs-4 text-primary">Funnie Travel</span> 是東南亞自由行專家，專注於新加坡、馬來西亞、泰國與峇里島等地區自由行旅遊，一直致力於為客戶提供最專業、最優質、最安全與最貼心的旅遊體驗行程。<br>每一個自由行旅遊行程皆是經過我們專業團隊精心規劃與嚴格篩選而安排的旅遊行程，為的是希望每一位客戶能夠擁有美好與安全的旅遊體驗並且享受自由行帶來的美好。</p>
        </div>
      </div>
      <div class="mt-5" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="200">
        <h2 class="text-center fw-bold text-primary">聯絡我們</h2>
        <div class="row mt-4 py-5">
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <p class="mb-4 fs-5"><span class="fw-bold text-primary">台北總店 :</span> 台北市中正區忠孝西路000號</p>
            <p class="mb-4 fs-5"><span class="fw-bold text-primary">營業時間 :</span> 周一至周六 9:00-18:00</p>
            <p class="mb-4 fs-5"><span class="fw-bold text-primary">訂購諮詢 :</span><a href="tel:+886-2-1234567" class=" text-dark"> 123-4567</a></p>
            <p class="mb-4 fs-5"><span class="fw-bold text-primary">免費專線 :</span><a href="tel:+886-2-0000000" class="text-dark"> 000-0000</a></p>
            <div class="mb-4">
              <a href="#" @click.prevent=""><i class="bi bi-facebook me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-twitter me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-instagram me-4 fs-4 text-primary hover-nav"></i></a>
              <a href="#" @click.prevent=""><i class="bi bi-wechat fs-4 text-primary hover-nav"></i></a>
            </div>
          </div>
          <div class="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6360485502814!2d121.51334262488692!3d25.04642247780834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a97263b48c71%3A0x7f964669b3bf255e!2z6Ie65YyX6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1696670378489!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Footer from '@/components/FooterComponent.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      isLoading: false
    }
  }
}
</script>
