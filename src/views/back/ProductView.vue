<template>
  <LoadingVue :active="isLoading" :loader="'dots'" :color="'#336b87'" :width="70" :height="70" />
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
    <i class="bi bi-plus-lg pe-1"></i>新增產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否上架</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category}}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">上架</span>
          <span class="text-muted" v-else>未上架</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationComponent :pages="pagination"
    @emit-pages="getProducts" />
  <ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct" />
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    PaginationComponent
  },
  inject: ['emitter'],
  methods: {
    getProducts (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.isLoading = true
      this.$http.get(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.products = response.data.products
          this.pagination = response.data.pagination
        }
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        productComponent.hideModal()
        if (response.data.success) {
          this.getProducts()
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功'
          })
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: response.data.message.join('、')
          })
        }
      })
    },
    // 開啟刪除 Modal
    openDelProductModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((response) => {
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.$httpMessageState(response, '刪除')
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
