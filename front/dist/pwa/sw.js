if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(a[f])return;let n={};const d=e=>s(e,f),r={module:{uri:f},exports:n,require:d};a[f]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-330ce1d9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"latinas"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.d65ded04.js",revision:"cbfe614e5d4499942683f581445a4d1b"},{url:"assets/BeauRivage-Regular.1e6d693b.ttf",revision:"a3dae0d84fe4b5e3e371be18c7f31a26"},{url:"assets/BookPage.30246a3b.css",revision:"e4d9c3d8bc9c32d93f53ca3faf5d0e8f"},{url:"assets/BookPage.7a2dd11f.js",revision:"e8c57028526a2a124262705a1dd84a46"},{url:"assets/BooksPage.6cfbf149.js",revision:"cb920a40def750140d520d7dab21a052"},{url:"assets/CarouselPage.1a000da8.js",revision:"9391c7fd38fc92c339c9b8a7ea289daa"},{url:"assets/CartPage.870d6201.js",revision:"99b478ec6546e8e28ab16201483634a8"},{url:"assets/CogsPage.01630d2b.js",revision:"fd8ac61f34c28b67d0050121e6236bc6"},{url:"assets/ErrorNotFound.e0e99bb3.js",revision:"18a305db45eef4fb463d5c41f672511b"},{url:"assets/fa-brands-400.003f1154.ttf",revision:"bb8cd014d7a55672934233c354e1c4a3"},{url:"assets/fa-brands-400.faae6fc0.woff2",revision:"005c9aa92b564b73b7582cc4f1fa49cb"},{url:"assets/fa-regular-400.7d81a1a7.ttf",revision:"675809e48e35c47d51c7d6fcc687ee28"},{url:"assets/fa-regular-400.9169d8be.woff2",revision:"747442fa76f1d9a31f9a54a2e8a4b448"},{url:"assets/fa-solid-900.886c8611.woff2",revision:"d5e647388e2415268b700d3df2e30a0d"},{url:"assets/fa-solid-900.cea79b34.ttf",revision:"0248ab19e74fc3731de14d647db4687a"},{url:"assets/fa-v4compatibility.335fd7d9.woff2",revision:"f20773a753bf1fbe9ccec04f90a470ea"},{url:"assets/fa-v4compatibility.455e8e72.ttf",revision:"58f1253e5639d508a6fe310c97327f82"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.a33550d6.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.5d785d06.js",revision:"4371c9343482ce5416299dc9e0c942f2"},{url:"assets/index.74bc3166.css",revision:"133202270cddcd4e095bdf2870560b0b"},{url:"assets/IndexClientPage.01a3f837.js",revision:"74cd1ab153eba0c30c376e2971b3e0b2"},{url:"assets/IndexClientPage.28f4eda5.css",revision:"6a8617f41d488eab3c53c972ac4464ce"},{url:"assets/IndexPage.c191ba06.js",revision:"9fb820df316037aa01d3e064e375b7e3"},{url:"assets/LoginPage.89c91a1d.css",revision:"908230cf5fe04cd40914cc8e2de3b4bc"},{url:"assets/LoginPage.ef752fe8.js",revision:"5e47c8ad1451df17e936e9fe39292d5b"},{url:"assets/MainClienteLayout.8a06ce16.css",revision:"eca1cce1da1017fba56e9d579d7662c0"},{url:"assets/MainClienteLayout.e8eafdf8.js",revision:"d173e7e8b97da6a6d84b33d34759bfc3"},{url:"assets/MainLayout.c291e292.js",revision:"f3d105ee72affaa82103c14bc90cad7c"},{url:"assets/QForm.0be72c05.js",revision:"8825546eb6187d82205da72a0968db4a"},{url:"assets/QHeader.943cc9ea.js",revision:"66b3d0df54f87c646cdc0f36a532985a"},{url:"assets/QImg.135d6e5d.js",revision:"1183bae3339bdf0ffc67a2baa6c41569"},{url:"assets/QItemLabel.f435f635.js",revision:"11046458e7a9eb0b34e31b5704b118f4"},{url:"assets/QLayout.732e8ba8.js",revision:"2d55177b4f892ebf8c816c9721ac64e5"},{url:"assets/QList.802a0d2a.js",revision:"c85b1fa4797d22c14c1b3eb75299694f"},{url:"assets/QPage.4403750c.js",revision:"938a10fa31d213851553310f89337f23"},{url:"assets/QTooltip.83f9dbfb.js",revision:"2a7c3b7a7e77c07ab7023892f5d6d34c"},{url:"assets/QVirtualScroll.52a034aa.js",revision:"1d84bb4a9f7f147fdba8b2e08c3f1192"},{url:"assets/Roboto-Regular.4e147ab6.ttf",revision:"8a36205bd9b83e03af0591a004bc97f4"},{url:"assets/selection.e90383e9.js",revision:"5d2da74bcfa6fd98f7fe9c6c48eb33dc"},{url:"assets/touch.3df10340.js",revision:"88ce3843cbd234458fc111496fd90393"},{url:"assets/use-quasar.5810fd05.js",revision:"c67ad7b4a99c28dcb5fada5830f16011"},{url:"assets/use-virtual-scroll.38a9e715.js",revision:"648ddfb84dae63fc5343bd4a50b41295"},{url:"favicon.ico",revision:"3bedfbe2da6870a6bccec27f55e9b9a4"},{url:"fondoLogin.jpg",revision:"67e2409376ca402f27ec97cb6f95715d"},{url:"icons/apple-icon-120x120.png",revision:"b30a7421c0e09d240eb86c244cbf613e"},{url:"icons/apple-icon-152x152.png",revision:"7c856d1ceb9c10ac40328b9f5c393bf1"},{url:"icons/apple-icon-167x167.png",revision:"0790e1236037cc51bc5afe2f51d9eb18"},{url:"icons/apple-icon-180x180.png",revision:"f61088efc79fad50402d72f9fe9fa7de"},{url:"icons/apple-launch-1080x2340.png",revision:"5449d257ee63a926136bb307d794d8ac"},{url:"icons/apple-launch-1125x2436.png",revision:"c20f61ba88a28f1446af8f3fa46aee7e"},{url:"icons/apple-launch-1170x2532.png",revision:"191545ea35c8303bed88aae86da9aa2d"},{url:"icons/apple-launch-1179x2556.png",revision:"9937daa8eea00fa138b160037b095b6b"},{url:"icons/apple-launch-1242x2208.png",revision:"dddf86ac8ae28ba6dc003427c3da20d2"},{url:"icons/apple-launch-1242x2688.png",revision:"f21f11109f770957ccbdf03f40451ed3"},{url:"icons/apple-launch-1284x2778.png",revision:"6fa52a281fcb425b0348727dd78bdcf1"},{url:"icons/apple-launch-1290x2796.png",revision:"147967fbd26f6cf15cfcc5d2b5e310f6"},{url:"icons/apple-launch-1536x2048.png",revision:"b7ca9733f6bcd52e9e717932977872a4"},{url:"icons/apple-launch-1620x2160.png",revision:"ed2e41567ff92c55ecf1936faf29af61"},{url:"icons/apple-launch-1668x2224.png",revision:"88d0134d9f507a22b50d64f844bf5d73"},{url:"icons/apple-launch-1668x2388.png",revision:"3e099931e519db5d6f3c1c11ff66c347"},{url:"icons/apple-launch-2048x2732.png",revision:"4e7b31a9062228ced2662459e528a7fc"},{url:"icons/apple-launch-750x1334.png",revision:"a1af9a114e0b365b302baf514f6afda4"},{url:"icons/apple-launch-828x1792.png",revision:"f98cc65f6f1375e47f44eaa115b98f25"},{url:"icons/favicon-128x128.png",revision:"9e2d437f37a2315330652214b9662fbc"},{url:"icons/favicon-16x16.png",revision:"9202bbd1b38032f8d1e43238c8fa3cc8"},{url:"icons/favicon-32x32.png",revision:"3aa88067729d9eb1f2ca179fa019e8b3"},{url:"icons/favicon-96x96.png",revision:"65c36ed54dacc409bb4d3a4276bdf0f4"},{url:"icons/icon-128x128.png",revision:"9e2d437f37a2315330652214b9662fbc"},{url:"icons/icon-192x192.png",revision:"c4d763c74792b39544241e2e9d9f91e4"},{url:"icons/icon-256x256.png",revision:"74b4daeeb315e65a94bbd4f8a90ff9dc"},{url:"icons/icon-384x384.png",revision:"b9a7612e1c509387cb36f7cd3d9fe9ef"},{url:"icons/icon-512x512.png",revision:"b401ec2bd8d0b68054464398ae2fb3ee"},{url:"icons/ms-icon-144x144.png",revision:"9760c5a8a11821cdb1a109a496425f25"},{url:"icons/safari-pinned-tab.svg",revision:"67df325d8666ce474cdec2c8b015c08d"},{url:"index.html",revision:"1d6171f75f896ef268c404e544265a71"},{url:"logo.png",revision:"2a1ca0bb21ededfcb2d652ddf5a4057a"},{url:"logo1.png",revision:"d048c9cccef52828b186caaca72653d4"},{url:"manifest.json",revision:"89266be88a48aed413ef8c280256d880"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
