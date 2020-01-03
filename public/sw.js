/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bdd12cc3ec433eec588ae65b53773db1"
  },
  {
    "url": "index.html",
    "revision": "424b4c017519857d055b272d13fc3ad0"
  },
  {
    "url": "manifest.json",
    "revision": "c83c8efb8bc12c125dc70e009745c64c"
  },
  {
    "url": "resources/images/404.webp",
    "revision": "0d6ca04f8ceb6d96213aaa60d23266be"
  },
  {
    "url": "resources/images/exporentals-logo.webp",
    "revision": "26cec794cdabe640613933e128d5afdf"
  },
  {
    "url": "resources/images/icons/favicon_144.png",
    "revision": "fbcf095cf0d1ad6ea638dc7f944ffe6a"
  },
  {
    "url": "resources/images/icons/favicon_192.png",
    "revision": "0ccc19c58874e1674747d94fa99681f2"
  },
  {
    "url": "resources/images/icons/favicon_192.webp",
    "revision": "4f90dc8735929fc9dbe60377b42177b2"
  },
  {
    "url": "resources/images/icons/favicon_48.png",
    "revision": "45430bb2529204926e2b3412acb17c9f"
  },
  {
    "url": "resources/images/icons/favicon_512.png",
    "revision": "a8a80b04ffe8a4fc9ac0539f70139ec1"
  },
  {
    "url": "resources/images/icons/favicon_72.png",
    "revision": "ee2d10dbd3a84406ead55fb21b14223f"
  },
  {
    "url": "resources/images/icons/favicon_96.png",
    "revision": "34dfe34c4935e7efaf20c028020f4aca"
  },
  {
    "url": "resources/images/icons/og_512.jpg",
    "revision": "5c930ace90e018de77abb189836ddea4"
  },
  {
    "url": "resources/images/image_0/768x432.webp",
    "revision": "610bc170e91b611ffc49c0d672a953ec"
  },
  {
    "url": "resources/images/image_1/1366x768.webp",
    "revision": "bb9e6566d0275a2fdf2126ec42726a2f"
  },
  {
    "url": "resources/images/image_1/1920x1080.webp",
    "revision": "67effe4a3f1840086fcb23d12cb83e53"
  },
  {
    "url": "resources/images/image_1/432x768.webp",
    "revision": "e85b7be2130168b0d55213ccb498482c"
  },
  {
    "url": "resources/images/image_2/1366x768.webp",
    "revision": "1aeae42202e413fa891e65429cc0f859"
  },
  {
    "url": "resources/images/image_2/1920x1080.webp",
    "revision": "d12cc38acd5e11243f4bff578f4111d5"
  },
  {
    "url": "resources/images/image_2/432x768.webp",
    "revision": "db1ab984087eb4ed590a8ba18e9c6d61"
  },
  {
    "url": "resources/images/image_3/1366x768.webp",
    "revision": "c7f49d2955cba9980edc977e8429a648"
  },
  {
    "url": "resources/images/image_3/1920x1080.webp",
    "revision": "b9b82c17c7e10854374cf5c8414fb94d"
  },
  {
    "url": "resources/images/image_3/432x768.webp",
    "revision": "6203fc198fd7e20b180ac751388be513"
  },
  {
    "url": "resources/scripts/firebase-analytics.js",
    "revision": "326350755aa2a2bf3c73ae9e75886d34"
  },
  {
    "url": "resources/scripts/firebase-app.js",
    "revision": "308a195c508c4d00cf441236020a6292"
  },
  {
    "url": "resources/scripts/firebase-auth.js",
    "revision": "242f28298727c31074470f04c1f811b5"
  },
  {
    "url": "resources/scripts/firebase-firestore.js",
    "revision": "a25058afba66062f3f811083ee5e4539"
  },
  {
    "url": "resources/scripts/firebase-performance.js",
    "revision": "e554b7647439d7d3ae2d267c5bf75b35"
  },
  {
    "url": "resources/scripts/jquery.min.js",
    "revision": "220afd743d9e9643852e31a135a9f3ae"
  },
  {
    "url": "resources/scripts/lazysizes.min.js",
    "revision": "d8513e7860f747ccf55c52308943beab"
  },
  {
    "url": "resources/scripts/main.js",
    "revision": "07bfa88a32e0e5814008ee9eccb52ad1"
  },
  {
    "url": "resources/scripts/materialize.min.js",
    "revision": "87d84bf8b4cc051c16092d27b1a7d9b3"
  },
  {
    "url": "resources/scripts/sweetalert.js",
    "revision": "609aa78f6cbd0b9a45a3b1f893c99db8"
  },
  {
    "url": "resources/sounds/hmm.wav",
    "revision": "14784a2ef1c717eb2ae055ea5703f415"
  },
  {
    "url": "resources/styles/main.css",
    "revision": "59a9ce3d19f0d7266477390b9b3f8d3f"
  },
  {
    "url": "resources/styles/material-icons.css",
    "revision": "e836a138540b4f2b2a9ac67d677699ca"
  },
  {
    "url": "resources/styles/materialize.min.css",
    "revision": "1035ecff3f17989aa89f6bb37efa21ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
