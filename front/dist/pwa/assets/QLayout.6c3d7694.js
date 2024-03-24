import{c as $,l as f,h as g,U as j,r as z,aE as I,x as H,y as P,aF as U,t as N,n as R,A as F,a8 as k,a9 as T,ag as M,w as S,aD as G,ad as A,aG as J,S as X,aH as Y,aI as Z,D as E,aJ as C,aK as ee,a7 as te}from"./index.19d89bdc.js";function ae(e,u,n){return n<=u?u:Math.min(n,Math.max(u,e))}function re(e,u,n){if(n<=u)return u;const t=n-u+1;let o=u+(e-u)%t;return o<u&&(o=t+o),o===0?0:o}var se=$({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:u}){const n=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>g("div",{class:n.value,role:"toolbar"},j(u.default))}});function ne(){const e=z(!I.value);return e.value===!1&&H(()=>{e.value=!0}),e}const K=typeof ResizeObserver!="undefined",W=K===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var B=$({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:u}){let n=null,t,o={width:-1,height:-1};function s(r){r===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:r,offsetHeight:l}=t;(r!==o.width||l!==o.height)&&(o={width:r,height:l},u("resize",o))}}const{proxy:h}=R();if(K===!0){let r;const l=m=>{t=h.$el.parentNode,t?(r=new ResizeObserver(s),r.observe(t),c()):m!==!0&&N(()=>{l(!0)})};return H(()=>{l()}),P(()=>{n!==null&&clearTimeout(n),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),U}else{let m=function(){n!==null&&(clearTimeout(n),n=null),l!==void 0&&(l.removeEventListener!==void 0&&l.removeEventListener("resize",s,F.passive),l=void 0)},b=function(){m(),t&&t.contentDocument&&(l=t.contentDocument.defaultView,l.addEventListener("resize",s,F.passive),c())};const r=ne();let l;return H(()=>{N(()=>{t=h.$el,t&&b()})}),P(m),h.trigger=s,()=>{if(r.value===!0)return g("object",{style:W.style,tabindex:-1,type:"text/html",data:W.url,"aria-hidden":"true",onLoad:b})}}}}),ue=$({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:n}){const{proxy:{$q:t}}=R(),o=k(M,T);if(o===T)return console.error("QHeader needs to be child of QLayout"),T;const s=z(parseInt(e.heightHint,10)),c=z(!0),h=f(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||t.platform.is.ios&&o.isContainer.value===!0),r=f(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return c.value===!0?s.value:0;const i=s.value-o.scroll.value.position;return i>0?i:0}),l=f(()=>e.modelValue!==!0||h.value===!0&&c.value!==!0),m=f(()=>e.modelValue===!0&&l.value===!0&&e.reveal===!0),b=f(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(l.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=f(()=>{const i=o.rows.value.top,y={};return i[0]==="l"&&o.left.space===!0&&(y[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(y[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),y});function d(i,y){o.update("header",i,y)}function p(i,y){i.value!==y&&(i.value=y)}function Q({height:i}){p(s,i),d("size",i)}function O(i){m.value===!0&&p(c,!0),n("focusin",i)}S(()=>e.modelValue,i=>{d("space",i),p(c,!0),o.animate()}),S(r,i=>{d("offset",i)}),S(()=>e.reveal,i=>{i===!1&&p(c,e.modelValue)}),S(c,i=>{o.animate(),n("reveal",i)}),S(o.scroll,i=>{e.reveal===!0&&p(c,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&d("size",s.value),d("space",e.modelValue),d("offset",r.value),P(()=>{o.instances.header===L&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const i=G(u.default,[]);return e.elevated===!0&&i.push(g("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(g(B,{debounce:0,onResize:Q})),g("header",{class:b.value,style:w.value,onFocusin:O},i)}}}),ce=$({name:"QPageContainer",setup(e,{slots:u}){const{proxy:{$q:n}}=R(),t=k(M,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;A(J,!0);const o=f(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:o.value},j(u.default))}});const{passive:_}=F,oe=["both","horizontal","vertical"];var ie=$({name:"QScrollObserver",props:{axis:{type:String,validator:e=>oe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:u}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,s;S(()=>e.scrollTarget,()=>{r(),h()});function c(){t!==null&&t();const b=Math.max(0,Y(o)),w=Z(o),d={top:b-n.position.top,left:w-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const p=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:b,left:w},n.directionChanged=n.direction!==p,n.delta=d,n.directionChanged===!0&&(n.direction=p,n.inflectionPoint=n.position),u("scroll",{...n})}function h(){o=X(s,e.scrollTarget),o.addEventListener("scroll",l,_),l(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",l,_),o=void 0)}function l(b){if(b===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[w,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{d(w),t=null}}}const{proxy:m}=R();return S(()=>m.$q.lang.rtl,c),H(()=>{s=m.$el.parentNode,h()}),P(()=>{t!==null&&t(),r()}),Object.assign(m,{trigger:l,getPosition:()=>n}),U}}),de=$({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:u,emit:n}){const{proxy:{$q:t}}=R(),o=z(null),s=z(t.screen.height),c=z(e.container===!0?0:t.screen.width),h=z({position:0,direction:"down",inflectionPoint:0}),r=z(0),l=z(I.value===!0?0:E()),m=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),b=f(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),w=f(()=>l.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),d=f(()=>l.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function p(a){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:a.position.top,direction:a.direction,directionChanged:a.directionChanged,inflectionPoint:a.inflectionPoint.top,delta:a.delta.top};h.value=v,e.onScroll!==void 0&&n("scroll",v)}}function Q(a){const{height:v,width:x}=a;let q=!1;s.value!==v&&(q=!0,s.value=v,e.onScrollHeight!==void 0&&n("scrollHeight",v),L()),c.value!==x&&(q=!0,c.value=x),q===!0&&e.onResize!==void 0&&n("resize",a)}function O({height:a}){r.value!==a&&(r.value=a,L())}function L(){if(e.container===!0){const a=s.value>r.value?E():0;l.value!==a&&(l.value=a)}}let i=null;const y={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:o,height:s,containerHeight:r,scrollbarWidth:l,totalWidth:f(()=>c.value+l.value),rows:f(()=>{const a=e.view.toLowerCase().split(" ");return{top:a[0].split(""),middle:a[1].split(""),bottom:a[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:h,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(a,v,x){y[a][v]=x}};if(A(M,y),E()>0){let x=function(){a=null,v.classList.remove("hide-scrollbar")},q=function(){if(a===null){if(v.scrollHeight>t.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(a);a=setTimeout(x,300)},V=function(D){a!==null&&D==="remove"&&(clearTimeout(a),x()),window[`${D}EventListener`]("resize",q)},a=null;const v=document.body;S(()=>e.container!==!0?"add":"remove",V),e.container!==!0&&V("add"),ee(()=>{V("remove")})}return()=>{const a=te(u.default,[g(ie,{onScroll:p}),g(B,{onResize:Q})]),v=g("div",{class:m.value,style:b.value,ref:e.container===!0?void 0:o,tabindex:-1},a);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:o},[g(B,{onResize:O}),g("div",{class:"absolute-full",style:w.value},[g("div",{class:"scroll",style:d.value},[v])])]):v}}});export{B as Q,de as a,se as b,ue as c,ce as d,ae as e,re as n};