// var CACHE_DINAMICO = 'dynamic-v1';
// var CACHE_ESTATICO = 'DSA_CACHE' ;
// var STATIC_FILES = ['/', 'index.js', 'index.html', 'app.js',
// 'HeroSection.css', 'HeroSection.js', 'Introduction.js', 'Main.css', 'Main.js','Home.js', 'Home.module.scss', 'Constants.js', 'Introducion.js',
// 'Introduction.css', 'Introduction.scss', 'Introduction.scss'];

// function isInArray(string, array) {
//   var cachePath;
//   if (string.indexOf(self.origin) === 0) { 
//     console.log('matched ', string);
//     cachePath = string.substring(self.origin.length); 
//   } else {
//     cachePath = string; 
//   }
//   return array.indexOf(cachePath) > -1;
// }

// const ignore = self.__WB_MANIFEST;

// //console.log('patacones lago puente');

// self.addEventListener('install', function (event) {
//   console.log('[Service Worker] Instalando Service Worker ...', event);
//   event.waitUntil(
//     caches.open(CACHE_ESTATICO)
//       .then(function (cache) {
//         console.log('[Service Worker] Preparando datos Pre-cache');
//         cache.addAll(STATIC_FILES);
//       })
//   )
// });


// self.addEventListener('activate', function (event) {
//   console.log('[Service Worker] Activando Service Worker ....', event);
//   event.waitUntil(
//     caches.keys()
//       .then(function (keyList) {
//         return Promise.all(keyList.map(function (key) {
//           if (key !== CACHE_ESTATICO && key !== CACHE_DINAMICO) {
//             console.log('[Service Worker] Eliminando cache viejo.', key);
//             return caches.delete(key);
//           }
//         }));
//       })
//   );
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function (event) {

//   var url = 'https://httpbin.org/get'; //URL de la app.
//   if (event.request.url.indexOf(url) > -1) {
//     event.respondWith(
//       caches.open(CACHE_DINAMICO)
//         .then(function (cache) {
//           return fetch(event.request)
//             .then(function (res) {
//               cache.put(event.request, res.clone());
//               return res;
//             });
//         })
//     );
//   } else if (isInArray(event.request.url, STATIC_FILES)) {
//     event.respondWith(
//       caches.match(event.request)
//     );
//   } else {
//     event.respondWith(
//       caches.match(event.request)
//         .then(function (response) {
//           if (response) {
//             return response;
//           } else {
//             return fetch(event.request)
//               .then(function (res) {
//                 return caches.open(CACHE_DINAMICO)
//                   .then(function (cache) {
//                     cache.put(event.request.url, res.clone());
//                     return res;
//                   })
//               // .catch(function (err) {
//               //   return caches.open(CACHE_ESTATICO)
//               //     .then(function (cache) {
//               //       if (event.request.url.indexOf('/src/Offline/Offline.js')) {
//               //         return cache.match('/App.js');
//               //       }
//               //     });
//               // });
//               //Se supone que esto era para volver si no encontraba datos pero no funciona bien por el propio diseño de la App
//               })
//           }
//         })
//     );
//   }
// });
