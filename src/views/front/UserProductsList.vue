<template>
  <Navbar></Navbar>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bold">行程列表</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center border rounded-2 py-3 mx-0 bg-light">
        <div class="col-md-7 pt-4 fs-4">
          <h2 class="text-primary fw-bold" >歡慶 <span class="text-secondary fw-bold">Funnie Travel</span> 盛大開幕</h2>
          <p>開幕慶期間結帳時輸入優惠碼 <span class=" py-1 px-2 lh-lg text-primary text-strong fw-bold">funnietravel</span>，即可享 <span class="text-strong text-primary fw-bold">85</span> 折優惠!</p>
        </div>
        <div class="col-md-4 text-center d-none d-md-block">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/funnietravel-api/1694093191593.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bbYicxdL4Vzgq0LdJCyICL6l4vycQ4mDsQvtV50Jq2BPl5adul6bkHtA5ITMUnnYzRVLTI0a2w5KiPsijlIISnRMTLKrY0PsDdskMwKvOqOvCpCjqF%2BTu9oDWMwQXr%2Fg7BDFMILQCp4bHSi6yugK73wBOwPtQZXWEQ1BX27glQiIeRXRI6alC6w2QdT5fscRMZAIU3pFdxY1bQqWleIiCcQ%2B4E4Hx5HCZUGHYbnVz1dgUZCJdgGzYMpv63CuzRp3s39WmK1xmBeHdVPL7mqOOJaijczJLPJtRvmfIwoLU5SfopIvpvom95pXsPr6hZzUYQp1ceYr7lTeXcMXNGQSdg%3D%3D" class="img-fluid rounded-2" alt="優惠碼" style="height: 200px; background-size: cover; background-position: center">
        </div>
      </div>
      <div class="row my-5">
        <div class="col-lg-3 px-3 mb-4 mb-lg-0">
          <div class="list-group text-start fw-bold">
            <router-link to="all" class="list-group-item list-group-item-action">
              <i class="bi bi-globe me-2 "></i>
                  全部
            </router-link>
            <router-link to='/user/bali' class="list-group-item list-group-item-action">
              <i class="bi bi-globe me-2 "></i>
                  峇里島
            </router-link>
            <router-link to='/user/thailand' class="list-group-item list-group-item-action">
              <i class="bi bi-globe me-2 "></i>
                  泰國
            </router-link>
            <router-link to='/user/singapore' class="list-group-item list-group-item-action">
              <i class="bi bi-globe me-2 "></i>
                  新加坡
            </router-link>
            <router-link to='/user/malaysia' class="list-group-item list-group-item-action">
              <i class="bi bi-globe me-2 "></i>
                  馬來西亞
            </router-link>
          </div>
        </div>
        <div class="col-lg-9">
        <router-view></router-view>
        </div>
      </div>
    </div>
    <ScrollTop></ScrollTop>
  </section>
  <Footer></Footer>
</template>

<script>
import Navbar from '@/components/UserNavBar.vue'
import Footer from '@/components/FooterComponent.vue'
import ScrollTop from '@/components/ScrollTop.vue'

export default {
  components: {
    Navbar,
    Footer,
    ScrollTop
  }
}
</script>
