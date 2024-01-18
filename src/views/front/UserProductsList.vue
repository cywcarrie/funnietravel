<template>
  <Navbar />
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder">行程列表</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/" class="text-primary hover-nav fw-bold">首頁</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">行程列表</li>
        </ol>
      </nav>
      <div class="row my-5">
        <div class="col-lg-3 mb-4 mb-lg-0">
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
          <router-view/>
        </div>
      </div>
    </div>
    <ScrollTop />
  </section>
  <Footer />
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
