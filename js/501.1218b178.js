"use strict";(self["webpackChunkfunnietravel"]=self["webpackChunkfunnietravel"]||[]).push([[501],{8745:function(t,e,l){l.d(e,{Z:function(){return _}});var a=l(6252),o=l(3577),i=l(9963);const s={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},r=(0,a._)("span",{"aria-hidden":"true"},[(0,a._)("i",{class:"bi bi-caret-left-fill"})],-1),d=[r],c=["onClick"],u=(0,a._)("span",{"aria-hidden":"true"},[(0,a._)("i",{class:"bi bi-caret-right-fill"})],-1),p=[u];function m(t,e,l,r,u,m){return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("ul",n,[(0,a._)("li",{class:(0,o.C_)(["page-item",{disabled:!l.pages.has_pre}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,i.iM)((t=>m.updatePage(l.pages.current_page-1)),["prevent"]))},d)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,o.C_)(["page-item",{active:t===l.pages.current_page}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,i.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),9,c)],2)))),128)),(0,a._)("li",{class:(0,o.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,i.iM)((t=>m.updatePage(l.pages.current_page+1)),["prevent"]))},p)],2)])])}var h={props:["pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},g=l(3744);const b=(0,g.Z)(h,[["render",m]]);var _=b},5501:function(t,e,l){l.r(e),l.d(e,{default:function(){return ht}});var a=l(6252),o=l(3577);const i={class:"text-end mt-3"},s=(0,a._)("i",{class:"bi bi-plus-lg pe-1"},null,-1),n={class:"table mt-4"},r=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{width:"120"},"分類"),(0,a._)("th",null,"產品名稱"),(0,a._)("th",{width:"120"},"原價"),(0,a._)("th",{width:"120"},"售價"),(0,a._)("th",{width:"100"},"是否上架"),(0,a._)("th",{width:"200"},"編輯")])],-1),d={class:"text-right"},c={class:"text-right"},u={key:0,class:"text-success"},p={key:1,class:"text-muted"},m={class:"btn-group"},h=["onClick"],g=["onClick"];function b(t,e,l,b,_,f){const P=(0,a.up)("LoadingVue"),v=(0,a.up)("PaginationComponent"),y=(0,a.up)("ProductModal"),w=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(P,{active:_.isLoading,loader:"dots",color:"#336b87",width:70,height:70},null,8,["active"]),(0,a._)("div",i,[(0,a._)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=t=>f.openModal(!0))},[s,(0,a.Uk)("新增產品 ")])]),(0,a._)("table",n,[r,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(_.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",null,(0,o.zw)(e.category),1),(0,a._)("td",null,(0,o.zw)(e.title),1),(0,a._)("td",d,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,a._)("td",c,(0,o.zw)(t.$filters.currency(e.price)),1),(0,a._)("td",null,[e.is_enabled?((0,a.wg)(),(0,a.iD)("span",u,"上架")):((0,a.wg)(),(0,a.iD)("span",p,"未上架"))]),(0,a._)("td",null,[(0,a._)("div",m,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openModal(!1,e)},"編輯",8,h),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelProductModal(e)},"刪除",8,g)])])])))),128))])]),(0,a.Wm)(v,{pages:_.pagination,onEmitPages:f.getProducts},null,8,["pages","onEmitPages"]),(0,a.Wm)(y,{ref:"productModal",product:_.tempProduct,onUpdateProduct:f.updateProduct},null,8,["product","onUpdateProduct"]),(0,a.Wm)(w,{item:_.tempProduct,ref:"delModal",onDelItem:f.delProduct},null,8,["item","onDelItem"])],64)}l(7658);var _=l(9963);const f={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog modal-xl",role:"document"},v={class:"modal-content border-0"},y=(0,a._)("div",{class:"modal-header bg-primary text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"新增產品")]),(0,a._)("button",{type:"button",class:"btn btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),w={class:"modal-body"},k={class:"row"},x={class:"col-sm-4"},M={class:"mb-3"},C=(0,a._)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),D={class:"mb-3"},U=(0,a._)("label",{for:"customFile",class:"form-label"},[(0,a.Uk)("或 上傳圖片 "),(0,a._)("i",{class:"fas fa-spinner fa-spin"})],-1),$=["src","alt"],V={key:0,class:"mt-5"},L=["onUpdate:modelValue"],Z=["src","alt"],F=["onClick"],z={key:0},j={class:"col-sm-8"},H={class:"mb-3"},I=(0,a._)("label",{for:"title",class:"form-label"},"標題",-1),N={class:"row gx-2"},W={class:"mb-3 col-md-6"},Y=(0,a._)("label",{for:"category",class:"form-label"},"分類",-1),K={class:"mb-3 col-md-6"},q=(0,a._)("label",{for:"price",class:"form-label"},"單位",-1),E={class:"row gx-2"},O={class:"mb-3 col-md-6"},S=(0,a._)("label",{for:"origin_price",class:"form-label"},"原價",-1),A={class:"mb-3 col-md-6"},B=(0,a._)("label",{for:"price",class:"form-label"},"售價",-1),G=(0,a._)("hr",null,null,-1),J={class:"mb-3"},Q=(0,a._)("label",{for:"description",class:"form-label"},"產品描述",-1),R={class:"mb-3"},T=(0,a._)("label",{for:"content",class:"form-label"},"說明內容",-1),X={class:"mb-3"},tt={class:"form-check"},et=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否上架 ",-1),lt={class:"modal-footer"},at=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ot(t,e,l,o,i,s){return(0,a.wg)(),(0,a.iD)("div",f,[(0,a._)("div",P,[(0,a._)("div",v,[y,(0,a._)("div",w,[(0,a._)("div",k,[(0,a._)("div",x,[(0,a._)("div",M,[C,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[_.nr,i.tempProduct.imageUrl]])]),(0,a._)("div",D,[U,(0,a._)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>s.uploadFile&&s.uploadFile(...t))},null,544)]),(0,a._)("img",{class:"img-fluid",src:i.tempProduct.imageUrl,alt:`${i.tempProduct.title} 圖片`},null,8,$),i.tempProduct.images?((0,a.wg)(),(0,a.iD)("div",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tempProduct.images,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{class:"mb-3 input-group",key:e},[(0,a.wy)((0,a._)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>i.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,L),[[_.nr,i.tempProduct.images[e]]]),(0,a._)("div",null,[(0,a._)("img",{class:"img-fluid",src:t,alt:`${i.tempProduct.title} 圖片`},null,8,Z)]),(0,a._)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>i.tempProduct.images.splice(e,1)}," 移除 ",8,F)])))),128)),i.tempProduct.images[i.tempProduct.images.length-1]||!i.tempProduct.images.length?((0,a.wg)(),(0,a.iD)("div",z,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:e[2]||(e[2]=t=>i.tempProduct.images.push(""))}," 新增圖片 ")])):(0,a.kq)("",!0)])):(0,a.kq)("",!0)]),(0,a._)("div",j,[(0,a._)("div",H,[I,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>i.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[_.nr,i.tempProduct.title]])]),(0,a._)("div",N,[(0,a._)("div",W,[Y,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>i.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[_.nr,i.tempProduct.category]])]),(0,a._)("div",K,[q,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[_.nr,i.tempProduct.unit]])])]),(0,a._)("div",E,[(0,a._)("div",O,[S,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[_.nr,i.tempProduct.origin_price,void 0,{number:!0}]])]),(0,a._)("div",A,[B,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>i.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[_.nr,i.tempProduct.price,void 0,{number:!0}]])])]),G,(0,a._)("div",J,[Q,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[_.nr,i.tempProduct.description]])]),(0,a._)("div",R,[T,(0,a.wy)((0,a._)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>i.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[_.nr,i.tempProduct.content]])]),(0,a._)("div",X,[(0,a._)("div",tt,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>i.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[_.e8,i.tempProduct.is_enabled]]),et])])])])]),(0,a._)("div",lt,[at,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",i.tempProduct))}," 確認 ")])])])],512)}var it=l(1339),st={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/funnie-api/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl)}))}},mixins:[it.Z]},nt=l(3744);const rt=(0,nt.Z)(st,[["render",ot]]);var dt=rt,ct=l(8745),ut=l(6713),pt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:dt,DelModal:ut.Z,PaginationComponent:ct.Z},inject:["emitter"],methods:{getProducts(t=1){const e=`https://vue3-course-api.hexschool.io/api/funnie-api/admin/products/?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const l=this.$refs.productModal;l.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/funnie-api/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/funnie-api/admin/product/${t.id}`,l="put");const a=this.$refs.productModal;this.$http[l](e,{data:this.tempProduct}).then((t=>{a.hideModal(),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}))},openDelProductModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},delProduct(){const t=`https://vue3-course-api.hexschool.io/api/funnie-api/admin/product/${this.tempProduct.id}`;this.$http.delete(t).then((t=>{const e=this.$refs.delModal;e.hideModal(),this.$httpMessageState(t,"刪除"),this.getProducts()}))}},created(){this.getProducts()}};const mt=(0,nt.Z)(pt,[["render",b]]);var ht=mt}}]);
//# sourceMappingURL=501.1218b178.js.map