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
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand me-auto d-flex align-items-center"
          ><img src="../assets/img/logo.png" alt="funnie-logo"
          style ="height:40px;"/><h1 class="logo text-primary fs-2 fw-bolder mb-0 px-2 me-5">Funnie</h1></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse fw-bold" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/about"  class="nav-link text-primary hover-nav"
        >關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/all"  class="nav-link text-primary hover-nav"
        >行程列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorite"  class="nav-link text-primary hover-nav"
        >我的最愛</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faqs"  class="nav-link text-primary hover-nav"
        >常見問題</router-link>
          </li>
        </ul>
        <form class="form-inline d-flex justify-content-center">
          <router-link to="/cart"  class="nav-link text-primary hover-nav"
        ><i class="bi bi-cart-fill fs-4 pe-1"></i>購物車
        </router-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    }
  }
}
</script>
