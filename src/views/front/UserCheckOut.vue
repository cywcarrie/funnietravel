<template>
  <Navbar />
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70"/>
  <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid">
  <h2 class="position-absolute text-center text-white fw-bolder">結帳流程</h2>
  </div>
  <section class="mb-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center my-5">
        <h5 class="fw-bold mb-0 text-secondary pay-header active">填寫資料</h5>
        <i class="bi bi-caret-right-fill fs-5 mx-2 text-secondary"></i>
        <h5 class="fw-bold mb-0 text-secondary pay-header" >確認付款</h5>
        <i class="bi bi-caret-right-fill fs-5 mx-2 text-secondary"></i>
        <h5 class="fw-bold mb-0 text-secondary pay-header">訂單完成</h5>
      </div>
      <div class="row my-5 py-5 bg-light rounded-2">
        <div class="col-lg-7">
          <h2 class="text-center fw-bold mb-4">行程明細</h2>
          <div class="table-responsive-md mb-5 mb-lg-0">
            <table class="table align-middle table-light table-borderless">
              <thead class="text-center table-secondary">
                <tr class="table-nowrap">
                  <th>行程名稱</th>
                  <th class="text-nowrap">數量</th>
                  <th class="text-end">價格</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                  <td class="table-nowrap fw-bold text-primary">{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end text-nowrap">
                    <small v-if="cart.final_total !== cart.total" class="text-success text-end">優惠價：</small>
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colspan="2" class="text-end fs-5">總計</td>
                <td class="text-end fs-5 text-primary fw-bold">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="2" class="text-end text-success fs-5">優惠價</td>
                <td class="text-end text-success fs-5 fw-bold">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row col-lg-5">
          <h2 class="text-center fw-bold mb-4">訂購人資訊</h2>
          <FormVue v-slot="{ errors }"
                @submit="createOrder">
            <div class="mb-3">
              <label for="email" class="form-label">Email<small class="ps-1 text-danger">(必填)</small></label>
              <FieldVue id="email" name="email" type="email" class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email" rules="email|required"
              v-model="form.user.email"></FieldVue>
              <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="name" class="form-label">訂購人姓名<small class="ps-1 text-danger">(必填)</small></label>
              <FieldVue id="name" name="姓名" type="text" class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名" rules="required"
              v-model="form.user.name"></FieldVue>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">訂購人電話<small class="ps-1 text-danger">(必填)</small></label>
              <FieldVue id="tel" name="電話" type="tel" class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話" rules="required"
              v-model="form.user.tel"></FieldVue>
              <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">訂購人地址<small class="ps-1 text-danger">(必填)</small></label>
              <FieldVue id="address" name="地址" type="text" class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址" rules="required"
              v-model="form.user.address"></FieldVue>
              <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea name="" id="message" class="form-control" cols="30" rows="10"
              v-model="form.message"></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <router-link class="btn btn-outline-primary" to="/cart"><i class="bi bi-caret-left-fill"></i>回上一頁</router-link>
              <button type="submit" class="btn btn-primary">確認訂單<i class="bi bi-caret-right-fill"></i></button>
            </div>
          </FormVue>
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
      isLoading: false,
      total: 0,
      final_total: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      cart: {},
      coupon_code: ''
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
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          this.$router.push(`/checkorder/${res.data.orderId}`)
        }).catch(error => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: `${error.response.data.message}`
          })
        })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
