"use strict";(self["webpackChunkfunnietravel"]=self["webpackChunkfunnietravel"]||[]).push([[490],{1490:function(a,t,e){e.r(t),e.d(t,{default:function(){return w}});var s=e(6252);const o={class:"container-fluid mt-3 position-relative"};function n(a,t,e,n,r,l){const i=(0,s.up)("Navbar"),c=(0,s.up)("RouterView");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i),(0,s._)("div",o,[(0,s.Wm)(c)])],64)}e(7658);var r=e(9963),l=e(5080);const i={class:"navbar navbar-expand-lg navbar-light bg-light shadow-sm"},c={class:"container-fluid"},u=(0,s.uE)('<a class="navbar-brand text-white fw-bold me-auto d-flex align-items-center" href="#"><img src="'+l+'" alt="funnie-logo" class="funnie-logo-img"><h1 class="logo text-primary fs-2 fw-bolder mb-0 px-2 me-5">Funnie</h1></a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>',2),v={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},h={class:"navbar-nav"};function d(a,t,e,o,n,l){const d=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)("nav",i,[(0,s._)("div",c,[u,(0,s._)("div",v,[(0,s._)("div",h,[(0,s.Wm)(d,{to:"/dashboard/products",class:"nav-link text-primary fw-bold hover-nav"},{default:(0,s.w5)((()=>[(0,s.Uk)("產品")])),_:1}),(0,s.Wm)(d,{to:"/dashboard/orders",class:"nav-link text-primary fw-bold hover-nav"},{default:(0,s.w5)((()=>[(0,s.Uk)("訂單")])),_:1}),(0,s.Wm)(d,{to:"/dashboard/coupons",class:"nav-link text-primary fw-bold hover-nav"},{default:(0,s.w5)((()=>[(0,s.Uk)("優惠券")])),_:1}),(0,s._)("a",{href:"#",onClick:t[0]||(t[0]=(0,r.iM)(((...a)=>l.logout&&l.logout(...a)),["prevent"])),class:"nav-link text-primary fw-bold hover-nav"},"登出")])])])])}var p={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a,this.user).then((a=>{a.data.success&&(this.$httpMessageState(a,"登出"),this.$router.push("/login"))}))}}},b=e(3744);const g=(0,b.Z)(p,[["render",d]]);var f=g,m={components:{Navbar:f},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t,this.user).then((a=>{a.data.success||this.$router.push("/login")}))}};const k=(0,b.Z)(m,[["render",n]]);var w=k}}]);
//# sourceMappingURL=490.7999a19d.js.map