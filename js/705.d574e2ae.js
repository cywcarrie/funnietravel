"use strict";(self["webpackChunkfunnietravel"]=self["webpackChunkfunnietravel"]||[]).push([[705],{7705:function(t,e,s){s.r(e),s.d(e,{default:function(){return nt}});var r=s(6252),a=s(3577),l=s(9963);const i=(0,r._)("div",{class:"d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"},[(0,r._)("h2",{class:"position-absolute text-center text-white fw-bolder banner-title"},"結帳流程")],-1),n={class:"mb-5"},c={class:"container"},o={class:"d-flex justify-content-center align-items-center mb-5"},d=(0,r._)("h5",{class:"fw-bold mb-0 text-secondary pay-header"},"填寫資料",-1),p=(0,r._)("i",{class:"bi bi-caret-right-fill fs-5 mx-2 text-secondary"},null,-1),u=(0,r._)("i",{class:"bi bi-caret-right-fill fs-5 mx-2 text-secondary"},null,-1),b={class:"row justify-content-center align-items-center"},_={class:"col-md-10"},h={key:0,class:"d-flex justify-content-center align-items-center mt-5"},w=(0,r._)("i",{class:"bi bi-check-circle-fill fs-2 pe-2 text-success"},null,-1),m=(0,r._)("h2",{class:"fw-bold mb-0 text-success"},"付款成功 !",-1),x=[w,m],f={key:1,class:"fs-5 fw-bold mt-4 mb-5 text-center"},y={class:"my-5 row justify-content-center"},g=(0,r._)("h3",{class:"text-center fw-bold mb-4"},"訂單明細",-1),v={class:"table align-middle table-light table-borderless mb-4"},k=(0,r._)("thead",{class:"text-center bg-light"},[(0,r._)("tr",null,[(0,r._)("th",{class:"text-nowrap"},"行程名稱"),(0,r._)("th",{class:"text-center text-nowrap"},"數量"),(0,r._)("th",{class:"text-nowrap"},"價格")])],-1),z={class:"text-center text-primary fw-bold"},D={class:"text-center text-nowrap"},$={class:"text-center text-nowrap"},j=(0,r._)("td",{colspan:"2",class:"text-end text-nowrap"},"總計",-1),O={class:"fs-5 text-primary fw-bold text-nowrap"},q=(0,r._)("h3",{class:"text-center fw-bold mb-4"},"訂購人資訊",-1),I={class:"table table-light table-borderless mb-4"},C={class:"table-nowrap"},L=(0,r._)("th",{class:"text-nowrap"},"姓名",-1),W={class:"text-nowrap"},Z={class:"table-nowrap"},F=(0,r._)("th",{width:"100",class:"text-nowrap"},"Email",-1),H={class:"text-nowrap"},N={class:"table-nowrap"},U=(0,r._)("th",{class:"text-nowrap"},"電話",-1),Y={class:"text-nowrap"},E={class:"table-nowrap"},K=(0,r._)("th",null,"地址",-1),M={class:"text-nowrap"},R={class:"table-nowrap"},S=(0,r._)("th",null,"付款方式",-1),V={class:"text-nowrap"},A={class:"table-nowrap"},B=(0,r._)("th",null,"付款狀態",-1),G={key:0,class:"text-nowrap text-danger"},J={key:1,class:"text-success fw-bold text-nowrap"},P={key:0,class:"text-end"},Q=(0,r._)("button",{class:"btn btn-primary ms-auto",type:"submit"},[(0,r.Uk)("確認付款"),(0,r._)("i",{class:"bi bi-caret-right-fill"})],-1),T=[Q],X={key:1,class:"text-end"},tt=(0,r._)("i",{class:"bi bi-cart pe-1"},null,-1);function et(t,e,s,w,m,Q){const et=(0,r.up)("Navbar"),st=(0,r.up)("LoadingVue"),rt=(0,r.up)("RouterLink"),at=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(et),(0,r.Wm)(st,{active:m.isLoading,loader:"dots",color:"#336b87",width:70,height:70},null,8,["active"]),i,(0,r._)("section",n,[(0,r._)("div",c,[(0,r._)("div",o,[d,p,(0,r._)("h5",{class:(0,a.C_)(["fw-bold mb-0 text-secondary pay-header",{active:!1===m.order.is_paid}])},"確認付款",2),u,(0,r._)("h5",{class:(0,a.C_)(["fw-bold mb-0 text-secondary pay-header",{active:!0===m.order.is_paid}])},"訂單完成",2)]),(0,r._)("div",b,[(0,r._)("div",_,[!0===m.order.is_paid?((0,r.wg)(),(0,r.iD)("div",h,x)):(0,r.kq)("",!0),!0===m.order.is_paid?((0,r.wg)(),(0,r.iD)("p",f,"感謝您的訂購，訂單明細將會寄送至您的電子信箱 !")):(0,r.kq)("",!0),(0,r._)("div",y,[g,(0,r._)("form",{class:"col-lg-6",onSubmit:e[0]||(e[0]=(0,l.iM)(((...t)=>Q.payOrder&&Q.payOrder(...t)),["prevent"]))},[(0,r._)("table",v,[k,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.order.products,(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",z,(0,a.zw)(e.product.title),1),(0,r._)("td",D,(0,a.zw)(e.qty)+"/"+(0,a.zw)(e.product.unit),1),(0,r._)("td",$,(0,a.zw)(t.$filters.currency(e.final_total)),1)])))),128))]),(0,r._)("tfoot",null,[(0,r._)("tr",null,[j,(0,r._)("td",O,(0,a.zw)(t.$filters.currency(m.order.total)),1)])])]),q,(0,r._)("table",I,[(0,r._)("tbody",null,[(0,r._)("tr",C,[L,(0,r._)("td",W,(0,a.zw)(m.order.user.name),1)]),(0,r._)("tr",Z,[F,(0,r._)("td",H,(0,a.zw)(m.order.user.email),1)]),(0,r._)("tr",N,[U,(0,r._)("td",Y,(0,a.zw)(m.order.user.tel),1)]),(0,r._)("tr",E,[K,(0,r._)("td",M,(0,a.zw)(m.order.user.address),1)]),(0,r._)("tr",R,[S,(0,r._)("td",V,(0,a.zw)(m.order.user.pay),1)]),(0,r._)("tr",A,[B,(0,r._)("td",null,[m.order.is_paid?((0,r.wg)(),(0,r.iD)("span",J,"付款完成")):((0,r.wg)(),(0,r.iD)("span",G,"尚未付款"))])])])]),!1===m.order.is_paid?((0,r.wg)(),(0,r.iD)("div",P,T)):(0,r.kq)("",!0),!0===m.order.is_paid?((0,r.wg)(),(0,r.iD)("div",X,[(0,r.Wm)(rt,{to:"/products/全部",class:"btn btn-primary ms-auto"},{default:(0,r.w5)((()=>[tt,(0,r.Uk)("繼續選購")])),_:1})])):(0,r.kq)("",!0)],32)])])])])]),(0,r.Wm)(at)],64)}var st=s(4564),rt=s(8520),at={components:{Navbar:st.Z,Footer:rt.Z},data(){return{order:{user:{}},orderId:"",isLoading:!1}},inject:["emitter"],methods:{getOrder(){const t=`https://vue3-course-api.hexschool.io/api/funnie-api/order/${this.orderId}`;this.$http.get(t).then((t=>{t.data.success&&(this.order=t.data.order)})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`${t.response.data.message}`})}))},payOrder(){const t=`https://vue3-course-api.hexschool.io/api/funnie-api/pay/${this.orderId}`;this.$http.post(t).then((t=>{t.data.success&&this.getOrder()})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`${t.response.data.message}`})}))}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},lt=s(3744);const it=(0,lt.Z)(at,[["render",et]]);var nt=it}}]);
//# sourceMappingURL=705.d574e2ae.js.map