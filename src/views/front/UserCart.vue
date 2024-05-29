<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70" />
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
    <h2 class="position-absolute text-center text-white fw-bolder banner-title">購物車</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <a href="#" title="回上一頁" class="text-secondary fw-bold" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
        <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/" class="text-dark hover-nav fw-bold">首頁</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">購物車</li>
          </ol>
        </nav>
      <template  v-if="cart.total !== 0">
        <div class="d-flex justify-content-center mt-5">
          <h1 class="fs-2 fw-bold">購物車清單</h1>
        </div>
        <div class="row mt-4 mb-5 bg-light rounded-2 py-3">
          <div class="col table-responsive mt-4 mb-4">
            <table class="table align-middle text-center table-light table-borderless">
              <thead class="table-secondary">
                <tr class="table-nowrap">
                  <th class="text-nowrap">行程名稱</th>
                  <th class="text-nowrap">數量</th>
                  <th class="text-end">單價</th>
                  <th class="text-end">小計</th>
                  <th class="text-end"></th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                  <td class="text-nowrap fw-bold text-primary cursor-pointer hover-nav" @click="getProduct(item.product_id)">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="text-nowrap">
                    <div class="d-flex justify-content-center">
                      <div class="input-group input-group-sm cart-qty">
                        <input type="number" class="form-control"
                        min="1"
                        :disabled="item.id === status.loadingItem"
                        @change="updateCart(item)"
                        v-model.number="item.qty">
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-end text-nowrap">{{ $filters.currency(item.product.price) }}</td>
                  <td class="text-end text-nowrap">
                    <small v-if="cart.final_total !== cart.total" class="text-success">優惠價：</small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                  <td>
                    <button type="button" class="btn btn-outline-primary btn-sm"
                    :disabled="status.loadingItem === item.id"
                    @click="removeCartItem(item.id)">
                    <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="3" class="text-end fs-4">總計</td>
                <td class="text-end fs-4 text-primary fw-bold">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success fs-4">優惠價</td>
                <td class="text-end text-success fs-4 fw-bold">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
              </tfoot>
            </table>
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <div class="input-group mb-3 coupon-input" v-if="cart.total !== 0">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
              <button class="btn btn-primary" type="button" @click="addCouponCode">
                  套用優惠碼
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-2">
            <div class="fs-6 fw-bold text-primary"><i class="bi bi-globe pe-2"></i>輸入優惠碼 <span class="fs-5 fw-bold text-secondary">funnietravel</span> 即享 <span class="fs-5 fw-bold text-secondary">85 </span>折優惠</div>
          </div>
          <div class="d-flex justify-content-end align-items-center mb-4">
            <button @click="copyCouponCode" class="btn btn-outline-primary" type="button">
              <span><i class="bi bi-clipboard-fill pe-2"></i><span>複製優惠碼</span></span>
            </button>
          </div>
          <div class="d-flex justify-content-between mt-4 mb-4" v-if="cart.total !== 0">
            <RouterLink class="btn btn-outline-primary" to="/products/全部">繼續選購</RouterLink>
            <RouterLink class="btn btn-primary ms-auto" to="/checkout">前往結帳</RouterLink>
          </div>
        </div>
      </template>
      <template v-if="cart.total === 0">
        <div class="py-5 mb-5">
          <div class="text-center pt-4">
            <h2 class="fw-bolder mb-5">您尚未有行程加入購物車</h2>
            <RouterLink class="btn btn-primary btn-lg fw-bold" to="/products/全部">馬上開始選購吧 !</RouterLink>
          </div>
        </div>
      </template>
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
      isLoading: false,
      carts: [],
      total: 0,
      final_total: 0,
      coupon_code: '',
      cart: {},
      status: {
        loadingItem: '' // 對應品項 id
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    updateCart (item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.status.loadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(url, { data: cart }).then((response) => {
        if (response.data.success) {
          this.status.loadingItem = ''
          this.getCart()
          this.emitter.emit('update-cart')
        }
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    removeCartItem (id) {
      this.status.loadingItem = id
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車')
        this.emitter.emit('update-cart')
        this.status.loadingItem = ''
        this.getCart()
        this.isLoading = false
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    addCouponCode () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      const coupon = {
        code: this.coupon_code
      }
      this.isLoading = true
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券')
        this.getCart()
        this.isLoading = false
      }).catch(error => {
        this.emitter.emit('push-message', {
          style: 'danger',
          title: `${error.response.data.message}`
        })
      })
    },
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    },
    copyCouponCode () {
      const copyText = document.createElement('input')
      const text = 'funnietravel'
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(text)
        .then(() => {
          this.emitter.emit('push-message', {
            style: 'primary',
            title: '優惠碼複製成功'
          })
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
