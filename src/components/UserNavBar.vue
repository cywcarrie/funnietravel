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
          style ="height:45px;"/><h1 class="logo text-primary fw-bold mb-0 px-2">Funnie</h1></router-link>
      <div class=" navbar-nav d-flex flex-row">
        <router-link to="/favorite"  class="nav-link text-primary hover-nav me-3 me-lg-0"
        ><i class="bi bi-heart-fill fs-4"></i></router-link>
        <router-link to="/cart"  class="nav-link text-primary hover-nav"
        ><i class="bi bi-cart-fill fs-4"></i>
        </router-link>
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
