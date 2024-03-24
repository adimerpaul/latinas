import{Q as k}from"./QImg.7c586663.js";import{ah as y,ai as C,u as _,r as Q,al as l,am as g,an as s,ap as c,ao as o,az as h,ay as b,aw as $,ab as B,ax as q,as as u,av as p,R as w}from"./index.19d89bdc.js";import{b as x,Q as m,a as I}from"./QItemLabel.c3d83a9d.js";import{Q as L}from"./QList.4a3fe856.js";import{Q as v}from"./QPage.5bc2f8ee.js";import{url as A}from"./axios.3c97fd86.js";import{u as F}from"./use-quasar.c11ff328.js";const P=C({name:"BookPage",setup(){const e=_(),r=F();return{url:A,book:Q({}),deletePedido(t){r.dialog({title:"Eliminar del carrito",message:"\xBFDesea eliminar este pedido?",cancel:!0,persistent:!0}).onOk(()=>{this.$store.pedidos.splice(t,1)})},compraWhatsapp(){console.log(e.pedidos);const t="%0A";let i=`Hola, quiero comprar los siguientes libros: ${t}`,d=0;e.pedidos.forEach(n=>{const a=parseInt(n.price)*parseInt(n.quantity);i+=`*${n.quantity} ${n.name}* ${a}Bs,${t} `,d+=a}),i+=`por un total de ${d} Bs`,window.open(`https://api.whatsapp.com/send?phone=59169603027&text=${i}`,"_blank")},capitalizeFirstLetter(t){return t=t.toLowerCase(),t.charAt(0).toUpperCase()+t.slice(1)},addToCart(t){r.dialog({title:"Agregar al carrito",message:"\xBFCuantos desea agregar?",prompt:{model:1,type:"number"},cancel:!0,persistent:!0}).onOk(i=>{r.notify({message:"Agregado al carrito "+i+" "+t.name,color:"green-4",textColor:"white",icon:"shopping_cart",position:"top",timeout:1e3,actions:[{icon:"close",color:"white",round:!0,handler:()=>{}}]}),this.$store.pedidos.push({...t,quantity:i})})}}},mounted(){},computed:{total(){let e=0;return this.$store.pedidos.forEach(r=>{e+=parseInt(r.price)*parseInt(r.quantity)}),e}}}),E={key:0,class:"text-h2 text-center text-grey-8"};function z(e,r,t,i,d,n){return l(),g(v,{class:"q-pa-xs"},{default:s(()=>[e.$store.pedidos.length===0?(l(),c("div",E,"No hay pedidos")):(l(),c(h,{key:1},[o(L,null,{default:s(()=>[(l(!0),c(h,null,b(e.$store.pedidos,(a,f)=>B((l(),g(x,{clickable:"",key:f},{default:s(()=>[o(m,{avatar:""},{default:s(()=>[o(q,{rounded:""},{default:s(()=>[o(k,{src:e.$url+"uploads/"+a.image,ratio:1},null,8,["src"])]),_:2},1024)]),_:2},1024),o(m,{class:"text-subtitle1"},{default:s(()=>[u(p(a.quantity)+" "+p(e.capitalizeFirstLetter(a.name))+" ",1),o(I,{caption:""},{default:s(()=>[u(p(a.price)+" Bs",1)]),_:2},1024)]),_:2},1024),o(m,{side:"",top:""},{default:s(()=>[u(p(a.price*a.quantity)+" Bs ",1),o($,{flat:"",dense:"",round:"",icon:"delete",color:"red",onClick:D=>e.deletePedido(f)},null,8,["onClick"])]),_:2},1024)]),_:2},1024)),[[w]])),128))]),_:1}),o($,{class:"q-mt-md full-width text-bold",color:"green",label:`Comprar ${e.total} Bs`,rounded:"","no-caps":"",icon:"shopping_cart",onClick:e.compraWhatsapp},null,8,["label","onClick"])],64))]),_:1})}var H=y(P,[["render",z]]);export{H as default};