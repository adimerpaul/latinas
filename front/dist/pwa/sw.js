if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let n={};const d=e=>a(e,f),r={module:{uri:f},exports:n,require:d};s[f]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(i(...e),n)))}}define(["./workbox-330ce1d9"],(function(e){"use strict";e.setCacheNameDetails({prefix:"latinas"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/axios.14583f39.js",revision:"cb7e0a01e71ad5c8bd8f4f9603385f21"},{url:"assets/BeauRivage-Regular.1e6d693b.ttf",revision:"a3dae0d84fe4b5e3e371be18c7f31a26"},{url:"assets/BookPage.30246a3b.css",revision:"e4d9c3d8bc9c32d93f53ca3faf5d0e8f"},{url:"assets/BookPage.3d287bb2.js",revision:"16f880fdf12c3feaa4438ad0524c3594"},{url:"assets/BooksPage.785eaa7c.js",revision:"648089078cdf526a52e4615c608d8ebc"},{url:"assets/CarouselPage.254b97a9.js",revision:"75d55ae89c8d31985e9181b0113304f7"},{url:"assets/CartPage.00ac4808.js",revision:"314dd3f65c685f9cec6f77dbbfb01fb5"},{url:"assets/CogsPage.5740e5fb.js",revision:"67640d7719ccf61322edb5bdc7478e64"},{url:"assets/ErrorNotFound.1c1e5e04.js",revision:"b975a35e7138e83b2d0d16d605f74957"},{url:"assets/fa-brands-400.003f1154.ttf",revision:"bb8cd014d7a55672934233c354e1c4a3"},{url:"assets/fa-brands-400.faae6fc0.woff2",revision:"005c9aa92b564b73b7582cc4f1fa49cb"},{url:"assets/fa-regular-400.7d81a1a7.ttf",revision:"675809e48e35c47d51c7d6fcc687ee28"},{url:"assets/fa-regular-400.9169d8be.woff2",revision:"747442fa76f1d9a31f9a54a2e8a4b448"},{url:"assets/fa-solid-900.886c8611.woff2",revision:"d5e647388e2415268b700d3df2e30a0d"},{url:"assets/fa-solid-900.cea79b34.ttf",revision:"0248ab19e74fc3731de14d647db4687a"},{url:"assets/fa-v4compatibility.335fd7d9.woff2",revision:"f20773a753bf1fbe9ccec04f90a470ea"},{url:"assets/fa-v4compatibility.455e8e72.ttf",revision:"58f1253e5639d508a6fe310c97327f82"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/format.a33550d6.js",revision:"3e44fb3b0266cf3450e20c11b260836a"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.35dca8a7.woff2",revision:"0ba49c096a77b67734434cebcaf2e14d"},{url:"assets/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.8e94758c.woff",revision:"0e4321a7c0dda51d72a669ac5892fc39"},{url:"assets/index.74bc3166.css",revision:"133202270cddcd4e095bdf2870560b0b"},{url:"assets/index.cc4f0594.js",revision:"6d33a8fc52610bc665550d50ae2f8458"},{url:"assets/IndexClientPage.12be5107.js",revision:"e9b3621e4bc82f7a70c1035f0aeda3f7"},{url:"assets/IndexClientPage.28f4eda5.css",revision:"6a8617f41d488eab3c53c972ac4464ce"},{url:"assets/IndexPage.0347d580.js",revision:"8d3ff30f7488118833e2b4bc19f20ded"},{url:"assets/LoginPage.ad0ab9c7.js",revision:"dfd70c92f847690b573e73f24002a8bd"},{url:"assets/LoginPage.f2ebbf72.css",revision:"1fc6987c72bc080e434e172e45fee5fe"},{url:"assets/MainClienteLayout.3e93fbf5.js",revision:"442e8965525af021a7f8904756e83de5"},{url:"assets/MainClienteLayout.8a06ce16.css",revision:"eca1cce1da1017fba56e9d579d7662c0"},{url:"assets/MainLayout.582f6e74.js",revision:"908268cef65c1e110aa55d90ed6a3477"},{url:"assets/QForm.d985885b.js",revision:"2b36fb48e847bce15ce81a0075d56103"},{url:"assets/QHeader.d5abff4b.js",revision:"be8b78120e13e4cd874f3cc0d556a949"},{url:"assets/QImg.86f2a9c1.js",revision:"104676cf662811e156e0274e60885021"},{url:"assets/QItemLabel.af216219.js",revision:"0c6927adbf7227a73a3195723ee779a4"},{url:"assets/QLayout.afbfc47a.js",revision:"44cddf82a12455387084d51281f02ced"},{url:"assets/QList.b21c685a.js",revision:"79faa3848a3d15e2871a362c6d0b88cc"},{url:"assets/QPage.461648c0.js",revision:"0a1fc11465cda1e2d775860e14af7de4"},{url:"assets/QTooltip.d3b2a14e.js",revision:"b9d0b2a7fb9b196a1f0f3337455b210f"},{url:"assets/QVirtualScroll.c0206d99.js",revision:"da5d7ef38e2b6520d554648e929e807b"},{url:"assets/Roboto-Regular.4e147ab6.ttf",revision:"8a36205bd9b83e03af0591a004bc97f4"},{url:"assets/selection.6b17297b.js",revision:"ee228f0610c1ac923daa545e6ab4b760"},{url:"assets/touch.3df10340.js",revision:"88ce3843cbd234458fc111496fd90393"},{url:"assets/use-quasar.50738c86.js",revision:"6314cc4353bfe1b2e72bd551c0772913"},{url:"assets/use-virtual-scroll.b44eea41.js",revision:"70e47119aab78e29d20500cea86a10bf"},{url:"favicon.ico",revision:"3bedfbe2da6870a6bccec27f55e9b9a4"},{url:"fondoLogin.jpg",revision:"67e2409376ca402f27ec97cb6f95715d"},{url:"icons/apple-icon-120x120.png",revision:"b30a7421c0e09d240eb86c244cbf613e"},{url:"icons/apple-icon-152x152.png",revision:"7c856d1ceb9c10ac40328b9f5c393bf1"},{url:"icons/apple-icon-167x167.png",revision:"0790e1236037cc51bc5afe2f51d9eb18"},{url:"icons/apple-icon-180x180.png",revision:"f61088efc79fad50402d72f9fe9fa7de"},{url:"icons/apple-launch-1080x2340.png",revision:"5449d257ee63a926136bb307d794d8ac"},{url:"icons/apple-launch-1125x2436.png",revision:"c20f61ba88a28f1446af8f3fa46aee7e"},{url:"icons/apple-launch-1170x2532.png",revision:"191545ea35c8303bed88aae86da9aa2d"},{url:"icons/apple-launch-1179x2556.png",revision:"9937daa8eea00fa138b160037b095b6b"},{url:"icons/apple-launch-1242x2208.png",revision:"dddf86ac8ae28ba6dc003427c3da20d2"},{url:"icons/apple-launch-1242x2688.png",revision:"f21f11109f770957ccbdf03f40451ed3"},{url:"icons/apple-launch-1284x2778.png",revision:"6fa52a281fcb425b0348727dd78bdcf1"},{url:"icons/apple-launch-1290x2796.png",revision:"147967fbd26f6cf15cfcc5d2b5e310f6"},{url:"icons/apple-launch-1536x2048.png",revision:"b7ca9733f6bcd52e9e717932977872a4"},{url:"icons/apple-launch-1620x2160.png",revision:"ed2e41567ff92c55ecf1936faf29af61"},{url:"icons/apple-launch-1668x2224.png",revision:"88d0134d9f507a22b50d64f844bf5d73"},{url:"icons/apple-launch-1668x2388.png",revision:"3e099931e519db5d6f3c1c11ff66c347"},{url:"icons/apple-launch-2048x2732.png",revision:"4e7b31a9062228ced2662459e528a7fc"},{url:"icons/apple-launch-750x1334.png",revision:"a1af9a114e0b365b302baf514f6afda4"},{url:"icons/apple-launch-828x1792.png",revision:"f98cc65f6f1375e47f44eaa115b98f25"},{url:"icons/favicon-128x128.png",revision:"9e2d437f37a2315330652214b9662fbc"},{url:"icons/favicon-16x16.png",revision:"9202bbd1b38032f8d1e43238c8fa3cc8"},{url:"icons/favicon-32x32.png",revision:"3aa88067729d9eb1f2ca179fa019e8b3"},{url:"icons/favicon-96x96.png",revision:"65c36ed54dacc409bb4d3a4276bdf0f4"},{url:"icons/icon-128x128.png",revision:"9e2d437f37a2315330652214b9662fbc"},{url:"icons/icon-192x192.png",revision:"c4d763c74792b39544241e2e9d9f91e4"},{url:"icons/icon-256x256.png",revision:"74b4daeeb315e65a94bbd4f8a90ff9dc"},{url:"icons/icon-384x384.png",revision:"b9a7612e1c509387cb36f7cd3d9fe9ef"},{url:"icons/icon-512x512.png",revision:"b401ec2bd8d0b68054464398ae2fb3ee"},{url:"icons/ms-icon-144x144.png",revision:"9760c5a8a11821cdb1a109a496425f25"},{url:"icons/safari-pinned-tab.svg",revision:"67df325d8666ce474cdec2c8b015c08d"},{url:"index.html",revision:"1e6146e2d5390e6481e249475df79b65"},{url:"logo.png",revision:"2a1ca0bb21ededfcb2d652ddf5a4057a"},{url:"logo1.png",revision:"d048c9cccef52828b186caaca72653d4"},{url:"manifest.json",revision:"89266be88a48aed413ef8c280256d880"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
