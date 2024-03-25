import{Q as f}from"./QImg.075c341a.js";import{_ as b,B as k,C as _,r as v,D as w,E as n,F as l,G as p,K as o,J as h,P as s,L as u,I as g,H as c,S as d,U as x,V as y,aZ as B,a_ as $}from"./index.89fb742d.js";import{Q as C}from"./QPage.763ade29.js";import{url as q,api as E}from"./axios.a1ad29c2.js";import{u as S}from"./use-quasar.1d5f04aa.js";const I=k({name:"BookPage",setup(){const e=S(),t=_();return{sharing:{url:"https://siscenter.org//book/"+t.currentRoute.value.params.id,title:"Encontr\xE9 este libro en la librer\xEDa",description:"Libreria latinas editores srl",quote:"Encontr\xE9 este libro en la librer\xEDa",hashtags:"libreria,libros,lectura",twitterUser:"latinaseditores"},networks:[{network:"email",name:"Email",icon:"far fah fa-lg fa-envelope",color:"red"},{network:"facebook",name:"Facebook",icon:"fab fah fa-lg fa-facebook-f",color:"blue"},{network:"sms",name:"SMS",icon:"far fah fa-lg fa-comment-dots",color:"green"},{network:"telegram",name:"Telegram",icon:"fab fah fa-lg fa-telegram-plane",color:"blue"},{network:"messenger",name:"Messenger",icon:"fab fah fa-lg fa-facebook-messenger",color:"blue"},{network:"whatsapp",name:"Whatsapp",icon:"fab fah fa-lg fa-whatsapp",color:"green"}],url:q,book:v({}),capitalizeFirstLetter(a){return a.charAt(0).toUpperCase()+a.slice(1)},addToCart(a){e.dialog({title:"Agregar al carrito",message:"\xBFCuantos desea agregar?",prompt:{model:1,type:"number"},cancel:!0,persistent:!0}).onOk(i=>{e.notify({message:"Agregado al carrito "+i+" "+a.name,color:"green-4",textColor:"white",icon:"shopping_cart",position:"top",timeout:1e3,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]}),this.$store.pedidos.push({...a,quantity:i})})}}},mounted(){this.$watch(()=>this.$route.params.id,()=>{this.getBook()}),this.getBook()},methods:{getBook(){const e=this.$route.params.id;E.get("books/"+e).then(t=>{this.book=t.data}).catch(t=>{console.log(t)})}}}),N=e=>(B("data-v-a864f946"),e=e(),$(),e),Q={class:"row"},U={class:"col-12 col-md-6 flex flex-center q-pa-xs"},F={class:"col-12 col-md-6 q-pa-xs"},P={class:"text-h6 text-bold text-grey-9"},V={class:"text-h6 text-bold text-red"},A={class:"text-h6 text-bold text-red"},D={key:0,class:"text-grey-8 text-caption text-h6 text-bold"},L={class:"text-h6 text-bold text-grey-7"},O={class:"text-h6 text-bold text-red"},T={class:"text-bold text-grey-7"},M={class:"q-pa-md"},R={class:""},z=N(()=>o("div",{class:"text-subtitle1 text-bold"},"Compartir en:",-1));function G(e,t,a,i,H,J){const m=w("ShareNetwork");return n(),l(C,null,{default:p(()=>[o("div",Q,[o("div",U,[e.book.image?(n(),l(f,{key:0,src:`${e.url}uploads/${e.book.image}`,style:{width:"180px",height:"250px"}},null,8,["src"])):h("",!0)]),o("div",F,[o("div",null,[o("div",P,s(e.book.name),1),o("div",V,s(e.book.author),1),o("div",A,[u(s(e.book.price)+" Bs ",1),e.book.priceOffer&&e.book.priceOffer>0?(n(),g("span",D,[o("s",null,s(e.book.priceOffer)+" Bs",1)])):h("",!0)]),o("div",L,s(e.book.stock)+" en stock",1),o("div",O,s(e.book.description),1),o("div",T,[u("Indice de lectura: "),c(d,{flat:"",type:"a",icon:"menu_book",href:e.book.indice,target:"_blank","no-caps":"",label:"ver"},null,8,["href"])]),o("div",M,[c(d,{icon:"o_shopping_cart",color:"green","no-caps":"",label:"Agregar al carrito",rounded:"",onClick:t[0]||(t[0]=r=>e.addToCart(e.book))})]),o("div",R,[z,(n(!0),g(y,null,x(e.networks,r=>(n(),l(m,{network:r.network,key:r.network,url:e.sharing.url,title:e.sharing.title,description:e.sharing.description,quote:e.sharing.quote,hashtags:e.sharing.hashtags,twitterUser:e.sharing.twitterUser},{default:p(()=>[c(d,{icon:r.icon,color:r.color,"no-caps":"",label:r.name,rounded:""},null,8,["icon","color","label"])]),_:2},1032,["network","url","title","description","quote","hashtags","twitterUser"]))),128))])])])])]),_:1})}var Y=b(I,[["render",G],["__scopeId","data-v-a864f946"]]);export{Y as default};
