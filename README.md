# Funnie Travel - 旅遊電商網站

## 專案說明 - 其他版本語言 : [English](README_en.md)

### Demo Website : [Link](https://cywcarrie.github.io/funnietravel/#/)

模擬旅遊電商網站，包含購物車、我的最愛、商品列表與常見問題等頁面。使用者可以將商品加入購物車或我的最愛、新增或刪除商品、套用優惠劵和送出訂單，並且可以瀏覽個別商品的詳細資訊。若使用者身份為管理員，可以進入後臺管理系統管理訂單，以及新增、編輯或刪除商品與優惠劵。

## 使用技術

- 使用 Vue 3 和 Vue CLI 建立專案
- 引入 Vue Router 和 Vue Axios 等套件，以實現路由管理和 API 請求功能
- 配置 ESLint 符合 Standard 規範，確保程式碼品質
- 使用 Bootstrap 5 和 SCSS 打造響應式界面，提升使用者體驗

## 網站功能

- 前台
   - 首頁
   - 關於我們
   - 商品列表：商品分類、分頁功能
   - 商品詳情
   - 我的最愛 : 新增商品至我的最愛，也可以從我的最愛頁面移出商品
   - 常見問題
   - 購物車：新增或刪除商品、套用優惠劵功能
   - 結帳：建立及送出訂單
- 後台
   - 商品管理：新增、修改、刪除商品及上傳商品圖片功能
   - 訂單管理：查看訂單
   - 優惠券管理：新增、修改、刪除優惠劵功能

## 安裝套件
```
npm install
```

### 運行專案
```
npm run serve
```

### 打包專案
```
npm run build
```

### 部署專案

```sh
sh deploy.sh
```

## 專案套件

- vue - v3.2.13
- vue-router - v4.0.3
- axios - v1.5.0
- vue-axios - v3.5.2
- vue-loading-overlay - v6.0
- mitt - v3.0.1
- aos - v2.3.4
- swiper - v10.2.0
- vee-validate - v4.11.3
- vue3-marquee - v4.1.0
- bootstrap - v5.3.1
- bootstrap-icons - v1.10.5

## 使用版本

- Node.js - v18.16.1
- npm - v9.5.1

