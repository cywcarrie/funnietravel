<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand text-white fw-bold" href="#">Funnie 後台</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/dashboard/products" class="nav-link text-white">產品</RouterLink>
          <RouterLink to="/dashboard/orders" class="nav-link text-white">訂單</RouterLink>
          <RouterLink to="/dashboard/coupons" class="nav-link text-white">優惠券</RouterLink>
          <a href="#" @click.prevent="logout" class="nav-link text-white">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user).then((response) => {
        if (response.data.success) {
          this.$router.push('/login')
        }
      })
    }
  }
}
</script>
