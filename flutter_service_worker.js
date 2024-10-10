'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".idea/libraries/Dart_SDK.xml": "f23ef501637f30359f534188e2595b5e",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "9e65f4b9beebb674c0dc252f70a5c177",
"assets/AssetManifest.bin": "cf6790dd049063c57e892b3917d003ed",
"assets/AssetManifest.bin.json": "d0f908e2c0c1a58f879232fb81b1594d",
"assets/AssetManifest.json": "44e3250e94d825f8cdb6f2d407da79e9",
"assets/assets/games/advanced_warfare.png": "c0439c4fb97c61d6fe486a5bd3d22991",
"assets/assets/games/blackops_1.png": "46fdf9a8237ed394df800ddcc78ad31d",
"assets/assets/games/blackops_2.png": "f7c97d0a9f54062aec99f8afc98767fc",
"assets/assets/games/blackops_3.png": "bbaf3c2452b9f8153770034748b46134",
"assets/assets/games/blackops_4.png": "1913f3353b0b41122dbff3e5d0a2f046",
"assets/assets/games/blackops_6.png": "f381428c0fd2e7e2dd1449d7ee8edad4",
"assets/assets/games/blackops_coldwar.png": "2118fb03c5b8cc8aa669cdaa7b47b116",
"assets/assets/games/ghosts.png": "dd67d6205926f092987f5fcf84c37592",
"assets/assets/games/infinite_warfare.png": "5f0cbec49cdb295b822d0487828e0fec",
"assets/assets/games/manifest.json": "24092344986537c54b09b08671f7fff6",
"assets/assets/games/modern_warfare_zombies.png": "4f1ecf7df3d80a16da0113077520f4bd",
"assets/assets/games/vanguard.png": "47fb14ac94f1c3adaf77273252ec6c70",
"assets/assets/games/world_at_war.png": "293f0051632882096122618153b933f6",
"assets/assets/games/world_war_2.png": "f745caa53960e204c909ad36771014fd",
"assets/easter_eggs/call_of_the_dead_mp.json": "1887e85c8311857d33da1e4b93218669",
"assets/easter_eggs/der_eisendrache.json": "baa2f72825cd42aa6aba1a7ad095e731",
"assets/easter_eggs/mauer_der_toten.json": "345b589767870b6ab68b0049152a8a05",
"assets/easter_eggs/moon.json": "0e6f992244aa82b53d40abbdce9dc46d",
"assets/easter_eggs/revelations.json": "8a07c098ae946d8393afe6623d79fc5d",
"assets/easter_eggs/shadows_of_evil.json": "40a46b2c41a6801efe364903eb68a914",
"assets/easter_eggs/tranzit.json": "fad5e7f0dcebc26a33b05a5037590fc6",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3317be4f0da498132671656cc6e1d336",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "574f205bc544d7f3bb054222b5b8c398",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c77ff9df9d4b0cd8b1f235f80ab26b4",
"/": "8c77ff9df9d4b0cd8b1f235f80ab26b4",
"lib/main.dart": "d8621d84413b0f1b1eeb5df51af935a1",
"main.dart.js": "327d523fb6219d5b35b2218ffb78e694",
"main.dart.mjs": "c589c3e11881e44bcee31dd065b35f5f",
"main.dart.wasm": "525df6e61a6c3dfb2610ca5feff3d79d",
"manifest.json": "7bba86639aca2e06eb29124a8d0776cc",
"pubspec.yaml": "933df00b557e608d7cbada3ded43c892",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "a3c3faab929a4c1261f61503513c9529",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "d3fe4b84691ca7d14d2c5d69ce9eaba5",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
