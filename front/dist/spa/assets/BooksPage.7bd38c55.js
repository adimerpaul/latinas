import{c as te,a as c,h as s,z as Z,k as le,aE as yt,Q as pe,a1 as Ue,a2 as St,a3 as Ae,a4 as kt,d as pt,aU as ke,b8 as De,b9 as wt,q as ae,a8 as Ie,r as ee,ba as _t,bb as me,bc as A,S as O,bd as Ct,aP as Pt,be as qt,bf as xt,g as Rt,_ as Bt,E as Vt,F as Ot,G as x,H as S,b1 as N,L as he,K as Ee,aV as Fe,aW as ye,P as Tt,w as Dt,aB as Et}from"./index.c727bed4.js";import{Q as Ft}from"./QImg.f1414a56.js";import{a as $e,b as Se,Q as Lt}from"./QTooltip.62396176.js";import{u as Nt,a as Qt,b as Mt,Q as jt,g as Ut}from"./QVirtualScroll.e5597146.js";import{c as He}from"./use-virtual-scroll.f28afd27.js";import{Q as At}from"./QForm.edd78eac.js";import{Q as It}from"./QPage.5b2fd950.js";import"./QItemLabel.c5c87bc8.js";import"./format.a33550d6.js";import"./selection.c3517afd.js";import"./QList.b82e450f.js";var Le=te({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:l}){const n=le(),f=c(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return s("td",{class:f.value},Z(l.default));const o=n.vnode.key,d=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(d===void 0)return;const{row:a}=e.props;return s("td",{class:f.value+d.__tdClass(a),style:d.__tdStyle(a)},Z(l.default))}}}),$t=te({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:n}){const f=le(),{proxy:{$q:o}}=f,d=a=>{n("click",a)};return()=>{if(e.props===void 0)return s("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:d},Z(l.default));let a,u;const v=f.vnode.key;if(v){if(a=e.props.colsMap[v],a===void 0)return}else a=e.props.col;if(a.sortable===!0){const r=a.align==="right"?"unshift":"push";u=yt(l.default,[]),u[r](s(pe,{class:a.__iconClass,name:o.iconSet.table.arrowUp}))}else u=Z(l.default);const k={class:a.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:a.headerStyle,onClick:r=>{a.sortable===!0&&e.props.sort(a),d(r)}};return s("th",k,u)}}});const Ht={xs:2,sm:4,md:6,lg:10,xl:14};function Ne(e,l,n){return{transform:l===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var zt=te({name:"QLinearProgress",props:{...Ue,...St,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:l}){const{proxy:n}=le(),f=Ae(e,n.$q),o=kt(e,Ht),d=c(()=>e.indeterminate===!0||e.query===!0),a=c(()=>e.reverse!==e.query),u=c(()=>({...o.value!==null?o.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),v=c(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),k=c(()=>Ne(e.buffer!==void 0?e.buffer:1,a.value,n.$q)),r=c(()=>`with${e.instantFeedback===!0?"out":""}-transition`),h=c(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${r.value} q-linear-progress__track--${f.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),w=c(()=>Ne(d.value===!0?1:e.value,a.value,n.$q)),_=c(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${r.value} q-linear-progress__model--${d.value===!0?"in":""}determinate`),P=c(()=>({width:`${e.value*100}%`})),p=c(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${r.value}`);return()=>{const y=[s("div",{class:h.value,style:k.value}),s("div",{class:_.value,style:w.value})];return e.stripe===!0&&d.value===!1&&y.push(s("div",{class:p.value,style:P.value})),s("div",{class:v.value,style:u.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},pt(l.default,y))}}});function Gt(e,l){return new Date(e)-new Date(l)}const Kt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Wt(e,l,n,f){const o=c(()=>{const{sortBy:u}=l.value;return u&&n.value.find(v=>v.name===u)||null}),d=c(()=>e.sortMethod!==void 0?e.sortMethod:(u,v,k)=>{const r=n.value.find(_=>_.name===v);if(r===void 0||r.field===void 0)return u;const h=k===!0?-1:1,w=typeof r.field=="function"?_=>r.field(_):_=>_[r.field];return u.sort((_,P)=>{let p=w(_),y=w(P);return r.rawSort!==void 0?r.rawSort(p,y,_,P)*h:p==null?-1*h:y==null?1*h:r.sort!==void 0?r.sort(p,y,_,P)*h:ke(p)===!0&&ke(y)===!0?(p-y)*h:De(p)===!0&&De(y)===!0?Gt(p,y)*h:typeof p=="boolean"&&typeof y=="boolean"?(p-y)*h:([p,y]=[p,y].map(T=>(T+"").toLocaleString().toLowerCase()),p<y?-1*h:p===y?0:h)})});function a(u){let v=e.columnSortOrder;if(wt(u)===!0)u.sortOrder&&(v=u.sortOrder),u=u.name;else{const h=n.value.find(w=>w.name===u);h!==void 0&&h.sortOrder&&(v=h.sortOrder)}let{sortBy:k,descending:r}=l.value;k!==u?(k=u,r=v==="da"):e.binaryStateSort===!0?r=!r:r===!0?v==="ad"?k=null:r=!1:v==="ad"?r=!0:k=null,f({sortBy:k,descending:r,page:1})}return{columnToSort:o,computedSortMethod:d,sort:a}}const Xt={filter:[String,Object],filterMethod:Function};function Jt(e,l){const n=c(()=>e.filterMethod!==void 0?e.filterMethod:(f,o,d,a)=>{const u=o?o.toLowerCase():"";return f.filter(v=>d.some(k=>{const r=a(k,v)+"";return(r==="undefined"||r==="null"?"":r.toLowerCase()).indexOf(u)!==-1}))});return ae(()=>e.filter,()=>{Ie(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:n}}function Yt(e,l){for(const n in l)if(l[n]!==e[n])return!1;return!0}function Qe(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Zt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function el(e,l){const{props:n,emit:f}=e,o=ee(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:n.rowsPerPageOptions.length!==0?n.rowsPerPageOptions[0]:5},n.pagination)),d=c(()=>{const r=n["onUpdate:pagination"]!==void 0?{...o.value,...n.pagination}:o.value;return Qe(r)}),a=c(()=>d.value.rowsNumber!==void 0);function u(r){v({pagination:r,filter:n.filter})}function v(r={}){Ie(()=>{f("request",{pagination:r.pagination||d.value,filter:r.filter||n.filter,getCellValue:l})})}function k(r,h){const w=Qe({...d.value,...r});if(Yt(d.value,w)===!0){a.value===!0&&h===!0&&u(w);return}if(a.value===!0){u(w);return}n.pagination!==void 0&&n["onUpdate:pagination"]!==void 0?f("update:pagination",w):o.value=w}return{innerPagination:o,computedPagination:d,isServerSide:a,requestServerInteraction:v,setPagination:k}}function tl(e,l,n,f,o,d){const{props:a,emit:u,proxy:{$q:v}}=e,k=c(()=>f.value===!0?n.value.rowsNumber||0:d.value),r=c(()=>{const{page:R,rowsPerPage:B}=n.value;return(R-1)*B}),h=c(()=>{const{page:R,rowsPerPage:B}=n.value;return R*B}),w=c(()=>n.value.page===1),_=c(()=>n.value.rowsPerPage===0?1:Math.max(1,Math.ceil(k.value/n.value.rowsPerPage))),P=c(()=>h.value===0?!0:n.value.page>=_.value),p=c(()=>(a.rowsPerPageOptions.includes(l.value.rowsPerPage)?a.rowsPerPageOptions:[l.value.rowsPerPage].concat(a.rowsPerPageOptions)).map(B=>({label:B===0?v.lang.table.allRows:""+B,value:B})));ae(_,(R,B)=>{if(R===B)return;const I=n.value.page;R&&!I?o({page:1}):R<I&&o({page:R})});function y(){o({page:1})}function T(){const{page:R}=n.value;R>1&&o({page:R-1})}function U(){const{page:R,rowsPerPage:B}=n.value;h.value>0&&R*B<k.value&&o({page:R+1})}function D(){o({page:_.value})}return a["onUpdate:pagination"]!==void 0&&u("update:pagination",{...n.value}),{firstRowIndex:r,lastRowIndex:h,isFirstPage:w,isLastPage:P,pagesNumber:_,computedRowsPerPageOptions:p,computedRowsNumber:k,firstPage:y,prevPage:T,nextPage:U,lastPage:D}}const ll={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},al=["update:selected","selection"];function ol(e,l,n,f){const o=c(()=>{const P={};return e.selected.map(f.value).forEach(p=>{P[p]=!0}),P}),d=c(()=>e.selection!=="none"),a=c(()=>e.selection==="single"),u=c(()=>e.selection==="multiple"),v=c(()=>n.value.length!==0&&n.value.every(P=>o.value[f.value(P)]===!0)),k=c(()=>v.value!==!0&&n.value.some(P=>o.value[f.value(P)]===!0)),r=c(()=>e.selected.length);function h(P){return o.value[P]===!0}function w(){l("update:selected",[])}function _(P,p,y,T){l("selection",{rows:p,added:y,keys:P,evt:T});const U=a.value===!0?y===!0?p:[]:y===!0?e.selected.concat(p):e.selected.filter(D=>P.includes(f.value(D))===!1);l("update:selected",U)}return{hasSelectionMode:d,singleSelection:a,multipleSelection:u,allRowsSelected:v,someRowsSelected:k,rowsSelectedNumber:r,isRowSelected:h,clearSelection:w,updateSelection:_}}function Me(e){return Array.isArray(e)?e.slice():[]}const nl={expanded:Array},rl=["update:expanded"];function il(e,l){const n=ee(Me(e.expanded));ae(()=>e.expanded,a=>{n.value=Me(a)});function f(a){return n.value.includes(a)}function o(a){e.expanded!==void 0?l("update:expanded",a):n.value=a}function d(a,u){const v=n.value.slice(),k=v.indexOf(a);u===!0?k===-1&&(v.push(a),o(v)):k!==-1&&(v.splice(k,1),o(v))}return{isRowExpanded:f,setExpanded:o,updateExpanded:d}}const sl={visibleColumns:Array};function ul(e,l,n){const f=c(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(v=>({name:v,label:v.toUpperCase(),field:v,align:ke(u[v])?"right":"left",sortable:!0})):[]}),o=c(()=>{const{sortBy:u,descending:v}=l.value;return(e.visibleColumns!==void 0?f.value.filter(r=>r.required===!0||e.visibleColumns.includes(r.name)===!0):f.value).map(r=>{const h=r.align||"right",w=`text-${h}`;return{...r,align:h,__iconClass:`q-table__sort-icon q-table__sort-icon--${h}`,__thClass:w+(r.headerClasses!==void 0?" "+r.headerClasses:"")+(r.sortable===!0?" sortable":"")+(r.name===u?` sorted ${v===!0?"sort-desc":""}`:""),__tdStyle:r.style!==void 0?typeof r.style!="function"?()=>r.style:r.style:()=>null,__tdClass:r.classes!==void 0?typeof r.classes!="function"?()=>w+" "+r.classes:_=>w+" "+r.classes(_):()=>w}})}),d=c(()=>{const u={};return o.value.forEach(v=>{u[v.name]=v}),u}),a=c(()=>e.tableColspan!==void 0?e.tableColspan:o.value.length+(n.value===!0?1:0));return{colList:f,computedCols:o,computedColsMap:d,computedColspan:a}}const Y="q-table__bottom row items-center",ze={};He.forEach(e=>{ze[e]={}});var cl=te({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...ze,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Ue,...Nt,...sl,...Xt,...Zt,...nl,...ll,...Kt},emits:["request","virtualScroll",...Qt,...rl,...al],setup(e,{slots:l,emit:n}){const f=le(),{proxy:{$q:o}}=f,d=Ae(e,o),{inFullscreen:a,toggleFullscreen:u}=Mt(),v=c(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),k=ee(null),r=ee(null),h=c(()=>e.grid!==!0&&e.virtualScroll===!0),w=c(()=>" q-table__card"+(d.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),_=c(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(d.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(a.value===!0?" fullscreen scroll":"")),P=c(()=>_.value+(e.loading===!0?" q-table--loading":""));ae(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+_.value,()=>{h.value===!0&&r.value!==null&&r.value.reset()});const{innerPagination:p,computedPagination:y,isServerSide:T,requestServerInteraction:U,setPagination:D}=el(f,M),{computedFilterMethod:R}=Jt(e,D),{isRowExpanded:B,setExpanded:I,updateExpanded:Ge}=il(e,n),oe=c(()=>{let t=e.rows;if(T.value===!0||t.length===0)return t;const{sortBy:i,descending:b}=y.value;return e.filter&&(t=R.value(t,e.filter,E.value,M)),Ye.value!==null&&(t=Ze.value(e.rows===t?t.slice():t,i,b)),t}),we=c(()=>oe.value.length),L=c(()=>{let t=oe.value;if(T.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(H.value===0&&e.rows!==t?t.length>z.value&&(t=t.slice(0,z.value)):t=t.slice(H.value,z.value)),t}),{hasSelectionMode:Q,singleSelection:Ke,multipleSelection:_e,allRowsSelected:We,someRowsSelected:Ce,rowsSelectedNumber:ne,isRowSelected:re,clearSelection:Xe,updateSelection:$}=ol(e,n,L,v),{colList:Je,computedCols:E,computedColsMap:Pe,computedColspan:qe}=ul(e,y,Q),{columnToSort:Ye,computedSortMethod:Ze,sort:ie}=Wt(e,y,Je,D),{firstRowIndex:H,lastRowIndex:z,isFirstPage:se,isLastPage:ue,pagesNumber:G,computedRowsPerPageOptions:et,computedRowsNumber:K,firstPage:ce,prevPage:de,nextPage:ve,lastPage:fe}=tl(f,p,y,T,D,we),tt=c(()=>L.value.length===0),lt=c(()=>{const t={};return He.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function at(){h.value===!0&&r.value.reset()}function ot(){if(e.grid===!0)return mt();const t=e.hideHeader!==!0?Oe:null;if(h.value===!0){const b=l["top-row"],g=l["bottom-row"],m={default:q=>Re(q.item,l.body,q.index)};if(b!==void 0){const q=s("tbody",b({cols:E.value}));m.before=t===null?()=>q:()=>[t()].concat(q)}else t!==null&&(m.before=t);return g!==void 0&&(m.after=()=>s("tbody",g({cols:E.value}))),s(jt,{ref:r,class:e.tableClass,style:e.tableStyle,...lt.value,scrollTarget:e.virtualScrollTarget,items:L.value,type:"__qtable",tableColspan:qe.value,onVirtualScroll:rt},m)}const i=[it()];return t!==null&&i.unshift(t()),Ut({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function nt(t,i){if(r.value!==null){r.value.scrollTo(t,i);return}t=parseInt(t,10);const b=k.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(b!==null){const g=k.value.querySelector(".q-table__middle.scroll"),m=b.offsetTop-e.virtualScrollStickySizeStart,q=m<g.scrollTop?"decrease":"increase";g.scrollTop=m,n("virtualScroll",{index:t,from:0,to:p.value.rowsPerPage-1,direction:q})}}function rt(t){n("virtualScroll",t)}function xe(){return[s(zt,{class:"q-table__linear-progress",color:e.color,dark:d.value,indeterminate:!0,trackColor:"transparent"})]}function Re(t,i,b){const g=v.value(t),m=re(g);if(i!==void 0)return i(Be({key:g,row:t,pageIndex:b,__trClass:m?"selected":""}));const q=l["body-cell"],C=E.value.map(V=>{const X=l[`body-cell-${V.name}`],J=X!==void 0?X:q;return J!==void 0?J(st({key:g,row:t,pageIndex:b,col:V})):s("td",{class:V.__tdClass(t),style:V.__tdStyle(t)},M(V,t))});if(Q.value===!0){const V=l["body-selection"],X=V!==void 0?V(ut({key:g,row:t,pageIndex:b})):[s(me,{modelValue:m,color:e.color,dark:d.value,dense:e.dense,"onUpdate:modelValue":(J,ht)=>{$([g],[t],J,ht)}})];C.unshift(s("td",{class:"q-table--col-auto-width"},X))}const F={key:g,class:{selected:m}};return e.onRowClick!==void 0&&(F.class["cursor-pointer"]=!0,F.onClick=V=>{n("RowClick",V,t,b)}),e.onRowDblclick!==void 0&&(F.class["cursor-pointer"]=!0,F.onDblclick=V=>{n("RowDblclick",V,t,b)}),e.onRowContextmenu!==void 0&&(F.class["cursor-pointer"]=!0,F.onContextmenu=V=>{n("RowContextmenu",V,t,b)}),s("tr",F,C)}function it(){const t=l.body,i=l["top-row"],b=l["bottom-row"];let g=L.value.map((m,q)=>Re(m,t,q));return i!==void 0&&(g=i({cols:E.value}).concat(g)),b!==void 0&&(g=g.concat(b({cols:E.value}))),s("tbody",g)}function Be(t){return be(t),t.cols=t.cols.map(i=>A({...i},"value",()=>M(i,t.row))),t}function st(t){return be(t),A(t,"value",()=>M(t.col,t.row)),t}function ut(t){return be(t),t}function be(t){Object.assign(t,{cols:E.value,colsMap:Pe.value,sort:ie,rowIndex:H.value+t.pageIndex,color:e.color,dark:d.value,dense:e.dense}),Q.value===!0&&A(t,"selected",()=>re(t.key),(i,b)=>{$([t.key],[t.row],i,b)}),A(t,"expand",()=>B(t.key),i=>{Ge(t.key,i)})}function M(t,i){const b=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(b,i):b}const j=c(()=>({pagination:y.value,pagesNumber:G.value,isFirstPage:se.value,isLastPage:ue.value,firstPage:ce,prevPage:de,nextPage:ve,lastPage:fe,inFullscreen:a.value,toggleFullscreen:u}));function ct(){const t=l.top,i=l["top-left"],b=l["top-right"],g=l["top-selection"],m=Q.value===!0&&g!==void 0&&ne.value>0,q="q-table__top relative-position row items-center";if(t!==void 0)return s("div",{class:q},[t(j.value)]);let C;if(m===!0?C=g(j.value).slice():(C=[],i!==void 0?C.push(s("div",{class:"q-table__control"},[i(j.value)])):e.title&&C.push(s("div",{class:"q-table__control"},[s("div",{class:["q-table__title",e.titleClass]},e.title)]))),b!==void 0&&(C.push(s("div",{class:"q-table__separator col"})),C.push(s("div",{class:"q-table__control"},[b(j.value)]))),C.length!==0)return s("div",{class:q},C)}const Ve=c(()=>Ce.value===!0?null:We.value);function Oe(){const t=dt();return e.loading===!0&&l.loading===void 0&&t.push(s("tr",{class:"q-table__progress"},[s("th",{class:"relative-position",colspan:qe.value},xe())])),s("thead",t)}function dt(){const t=l.header,i=l["header-cell"];if(t!==void 0)return t(ge({header:!0})).slice();const b=E.value.map(g=>{const m=l[`header-cell-${g.name}`],q=m!==void 0?m:i,C=ge({col:g});return q!==void 0?q(C):s($t,{key:g.name,props:C},()=>g.label)});if(Ke.value===!0&&e.grid!==!0)b.unshift(s("th",{class:"q-table--col-auto-width"}," "));else if(_e.value===!0){const g=l["header-selection"],m=g!==void 0?g(ge({})):[s(me,{color:e.color,modelValue:Ve.value,dark:d.value,dense:e.dense,"onUpdate:modelValue":Te})];b.unshift(s("th",{class:"q-table--col-auto-width"},m))}return[s("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},b)]}function ge(t){return Object.assign(t,{cols:E.value,sort:ie,colsMap:Pe.value,color:e.color,dark:d.value,dense:e.dense}),_e.value===!0&&A(t,"selected",()=>Ve.value,Te),t}function Te(t){Ce.value===!0&&(t=!1),$(L.value.map(v.value),L.value,t)}const W=c(()=>{const t=[e.iconFirstPage||o.iconSet.table.firstPage,e.iconPrevPage||o.iconSet.table.prevPage,e.iconNextPage||o.iconSet.table.nextPage,e.iconLastPage||o.iconSet.table.lastPage];return o.lang.rtl===!0?t.reverse():t});function vt(){if(e.hideBottom===!0)return;if(tt.value===!0){if(e.hideNoData===!0)return;const b=e.loading===!0?e.loadingLabel||o.lang.table.loading:e.filter?e.noResultsLabel||o.lang.table.noResults:e.noDataLabel||o.lang.table.noData,g=l["no-data"],m=g!==void 0?[g({message:b,icon:o.iconSet.table.warning,filter:e.filter})]:[s(pe,{class:"q-table__bottom-nodata-icon",name:o.iconSet.table.warning}),b];return s("div",{class:Y+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return s("div",{class:Y},[t(j.value)]);const i=e.hideSelectedBanner!==!0&&Q.value===!0&&ne.value>0?[s("div",{class:"q-table__control"},[s("div",[(e.selectedRowsLabel||o.lang.table.selectedRecords)(ne.value)])])]:[];if(e.hidePagination!==!0)return s("div",{class:Y+" justify-end"},bt(i));if(i.length!==0)return s("div",{class:Y},i)}function ft(t){D({page:1,rowsPerPage:t.value})}function bt(t){let i;const{rowsPerPage:b}=y.value,g=e.paginationLabel||o.lang.table.pagination,m=l.pagination,q=e.rowsPerPageOptions.length>1;if(t.push(s("div",{class:"q-table__separator col"})),q===!0&&t.push(s("div",{class:"q-table__control"},[s("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||o.lang.table.recordsPerPage]),s($e,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:b,options:et.value,displayValue:b===0?o.lang.table.allRows:b,dark:d.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ft})])),m!==void 0)i=m(j.value);else if(i=[s("span",b!==0?{class:"q-table__bottom-item"}:{},[b?g(H.value+1,Math.min(z.value,K.value),K.value):g(1,we.value,K.value)])],b!==0&&G.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),G.value>2&&i.push(s(O,{key:"pgFirst",...C,icon:W.value[0],disable:se.value,onClick:ce})),i.push(s(O,{key:"pgPrev",...C,icon:W.value[1],disable:se.value,onClick:de}),s(O,{key:"pgNext",...C,icon:W.value[2],disable:ue.value,onClick:ve})),G.value>2&&i.push(s(O,{key:"pgLast",...C,icon:W.value[3],disable:ue.value,onClick:fe}))}return t.push(s("div",{class:"q-table__control"},i)),t}function gt(){const t=e.gridHeader===!0?[s("table",{class:"q-table"},[Oe()])]:e.loading===!0&&l.loading===void 0?xe():void 0;return s("div",{class:"q-table__middle"},t)}function mt(){const t=l.item!==void 0?l.item:i=>{const b=i.cols.map(m=>s("div",{class:"q-table__grid-item-row"},[s("div",{class:"q-table__grid-item-title"},[m.label]),s("div",{class:"q-table__grid-item-value"},[m.value])]));if(Q.value===!0){const m=l["body-selection"],q=m!==void 0?m(i):[s(me,{modelValue:i.selected,color:e.color,dark:d.value,dense:e.dense,"onUpdate:modelValue":(C,F)=>{$([i.key],[i.row],C,F)}})];b.unshift(s("div",{class:"q-table__grid-item-row"},q),s(Ct,{dark:d.value}))}const g={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(g.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(g.onClick=m=>{n("RowClick",m,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(g.onDblclick=m=>{n("RowDblclick",m,i.row,i.pageIndex)})),s("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[s("div",g,b)])};return s("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},L.value.map((i,b)=>t(Be({key:v.value(i),row:i,pageIndex:b}))))}return Object.assign(f.proxy,{requestServerInteraction:U,setPagination:D,firstPage:ce,prevPage:de,nextPage:ve,lastPage:fe,isRowSelected:re,clearSelection:Xe,isRowExpanded:B,setExpanded:I,sort:ie,resetVirtualScroll:at,scrollTo:nt,getCellValue:M}),_t(f.proxy,{filteredSortedRows:()=>oe.value,computedRows:()=>L.value,computedRowsNumber:()=>K.value}),()=>{const t=[ct()],i={ref:k,class:P.value};return e.grid===!0?t.push(gt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(ot(),vt()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),s("div",i,t)}}});function je(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var dl=Pt({name:"close-popup",beforeMount(e,{value:l}){const n={depth:je(l),handler(f){n.depth!==0&&setTimeout(()=>{const o=qt(e);o!==void 0&&xt(o,f,n.depth)})},handlerKey(f){Rt(f,13)===!0&&n.handler(f)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:l,oldValue:n}){l!==n&&(e.__qclosepopup.depth=je(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});const vl={name:"BooksPage",data(){return{books:[],book:{},filter:"",bookDialog:!1,bookOption:"",categories:[],columns:[{name:"actions",align:"center",label:"Acciones",sortable:!1},{name:"image",align:"left",label:"Imagen",field:"image",sortable:!0},{name:"name",required:!0,label:"Nombre",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"description",align:"left",label:"Descripci\xF3n",field:"description",sortable:!0},{name:"price",align:"left",label:"Precio",field:"price",sortable:!0},{name:"priceOffer",align:"left",label:"Precio de oferta",field:"priceOffer",sortable:!0},{name:"stock",align:"left",label:"Stock",field:"stock",sortable:!0},{name:"author",align:"left",label:"Autor",field:"author",sortable:!0}]}},mounted(){this.booksGet(),this.categoriesGet()},methods:{deleteBook(e){this.$q.dialog({title:"Eliminar libro",message:"\xBFEst\xE1s seguro de eliminar el libro?",cancel:!0,persistent:!0}).onOk(()=>{this.$axios.delete("books/"+e.id).then(l=>{this.booksGet()}).catch(l=>{console.log(l.response.data.message),this.$alert.error(l.response.data.message)})})},editBook(e){this.bookDialog=!0,this.bookOption="edit",this.book={...e},this.book.categoryId=e.category.id},bookSave(){this.bookOption==="create"?this.$axios.post("books",this.book).then(()=>{this.booksGet(),this.bookDialog=!1}).catch(e=>{console.log(e.response.data.message),this.$alert.error(e.response.data.message)}):this.$axios.put("books/"+this.book.id,this.book).then(e=>{this.booksGet(),this.bookDialog=!1}).catch(e=>{console.log(e.response.data.message),this.$alert.error(e.response.data.message)})},categoriesGet(){this.$axios.get("categories").then(e=>{this.categories=e.data}).catch(e=>{console.log(e.response.data.message),this.$alert.error(e.response.data.message)})},changeImage(e){this.book=e,this.$refs.fileInput.click()},handleFileChange(e){const l=e.target.files[0];if(!l)return;const n=new FormData;n.append("file",l),this.$axios.post("books/upload/"+this.book.id,n).then(f=>{this.book.image=f.data.image}).catch(f=>{console.log(f.response.data.message),this.$alert.error(f.response.data.message)})},bookNew(){this.bookDialog=!0,this.bookOption="create",this.book={name:"",description:"",image:"",indice:"",price:0,priceOffer:0,stock:0,author:"",categoryId:1}},booksGet(){this.$axios.get("books/all").then(e=>{this.books=e.data}).catch(e=>{console.log(e.response.data.message),this.$alert.error(e.response.data.message)})}}},fl={class:"text-h6"};function bl(e,l,n,f,o,d){return Vt(),Ot(It,{class:"q-pa-xs bg-grey-3"},{default:x(()=>[S(cl,{rows:o.books,dense:"","rows-per-page-options":[15,0],columns:o.columns,filter:o.filter,"wrap-cells":!0},{"top-right":x(()=>[S(O,{label:"Nuevo libro",icon:"add_circle_outline",onClick:d.bookNew,"no-caps":"",color:"green"},null,8,["onClick"]),S(N,{modelValue:o.filter,"onUpdate:modelValue":l[0]||(l[0]=a=>o.filter=a),debounce:"300",placeholder:"Buscar",dense:"",outlined:""},{prepend:x(()=>[S(pe,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-image":x(a=>[S(Le,{props:a},{default:x(()=>[S(Ft,{src:e.$url+"uploads/"+a.row.image,style:{width:"22px",height:"22px"}},null,8,["src"])]),_:2},1032,["props"])]),"body-cell-actions":x(a=>[S(Le,{props:a},{default:x(()=>[S(O,{flat:"",dense:"",size:"10px",icon:"o_edit",onClick:u=>d.editBook(a.row)},{default:x(()=>[S(Se,null,{default:x(()=>[he("Editar libro")]),_:1})]),_:2},1032,["onClick"]),S(O,{flat:"",dense:"",size:"10px",icon:"o_delete",onClick:u=>d.deleteBook(a.row)},{default:x(()=>[S(Se,null,{default:x(()=>[he("Eliminar libro")]),_:1})]),_:2},1032,["onClick"]),S(O,{flat:"",dense:"",size:"10px",icon:"o_image",onClick:u=>d.changeImage(a.row)},{default:x(()=>[S(Se,null,{default:x(()=>[he("Cambiar imagen")]),_:1})]),_:2},1032,["onClick"]),Ee("input",{type:"file",ref:"fileInput",style:{display:"none"},onChange:l[1]||(l[1]=(...u)=>d.handleFileChange&&d.handleFileChange(...u)),accept:"image/*"},null,544)]),_:2},1032,["props"])]),_:1},8,["rows","columns","filter"]),S(Et,{modelValue:o.bookDialog,"onUpdate:modelValue":l[10]||(l[10]=a=>o.bookDialog=a),persistent:""},{default:x(()=>[S(Fe,{style:{width:"400px"},flat:"",bordered:""},{default:x(()=>[S(ye,null,{default:x(()=>[S(Fe,null,{default:x(()=>[S(ye,{class:"row items-center q-pb-none"},{default:x(()=>[Ee("div",fl,Tt(o.bookOption==="create"?"Nuevo libro":"Editar libro"),1),S(Lt),Dt(S(O,{icon:"close",flat:"",round:"",dense:""},null,512),[[dl]])]),_:1}),S(ye,null,{default:x(()=>[S(At,{onSubmit:d.bookSave},{default:x(()=>[S(N,{modelValue:o.book.name,"onUpdate:modelValue":l[2]||(l[2]=a=>o.book.name=a),label:"Nombre",outlined:"",dense:"",rules:[a=>a.length>2||"El nombre debe tener al menos 3 caracteres"]},null,8,["modelValue","rules"]),S(N,{modelValue:o.book.description,"onUpdate:modelValue":l[3]||(l[3]=a=>o.book.description=a),label:"Descripci\xF3n",outlined:"",dense:"",hint:"Descripci\xF3n del libro"},null,8,["modelValue"]),S(N,{modelValue:o.book.indice,"onUpdate:modelValue":l[4]||(l[4]=a=>o.book.indice=a),label:"\xCDndice",outlined:"",dense:"",hint:"\xCDndice del libro"},null,8,["modelValue"]),S(N,{modelValue:o.book.price,"onUpdate:modelValue":l[5]||(l[5]=a=>o.book.price=a),label:"Precio",outlined:"",dense:"",rules:[a=>a>0||"El precio debe ser mayor a 0"]},null,8,["modelValue","rules"]),S(N,{modelValue:o.book.priceOffer,"onUpdate:modelValue":l[6]||(l[6]=a=>o.book.priceOffer=a),label:"Precio de oferta",outlined:"",dense:"",rules:[a=>a>=0||"El precio de oferta debe ser mayor o igual a 0"]},null,8,["modelValue","rules"]),S(N,{modelValue:o.book.stock,"onUpdate:modelValue":l[7]||(l[7]=a=>o.book.stock=a),label:"Stock",outlined:"",dense:"",rules:[a=>a>=0||"El stock debe ser mayor o igual a 0"]},null,8,["modelValue","rules"]),S(N,{modelValue:o.book.author,"onUpdate:modelValue":l[8]||(l[8]=a=>o.book.author=a),label:"Autor",outlined:"",dense:"",rules:[a=>a.length>2||"El autor debe tener al menos 3 caracteres"]},null,8,["modelValue","rules"]),S($e,{modelValue:o.book.categoryId,"onUpdate:modelValue":l[9]||(l[9]=a=>o.book.categoryId=a),options:o.categories,label:"Categor\xEDa",outlined:"",dense:"","emit-value":"","map-options":"","option-value":"id","option-label":"name",rules:[a=>a!==null||"Debes seleccionar una categor\xEDa"]},null,8,["modelValue","options","rules"]),S(O,{label:"Guardar",color:"primary",type:"submit",class:"full-width","no-caps":""})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var ql=Bt(vl,[["render",bl]]);export{ql as default};
