"use strict";var precacheConfig=[["app.27df01f29eb8a999f7988bb817a33583.css","711642da9b44c8e2096c859668a6ba3c"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/fontawesome-webfont.fee66e7.woff","fee66e712a8a08eef5805a46892932ad"],["fonts/ionicons.2c159d0.woff","2c159d0d05473040b53ec79df8797d32"],["img/quasar-logo-full.c3e8865.svg","c3e886514c633b21c81db623874d06cd"],["index.html","0c8f9726468c0176dc3599595ed3477a"],["js/app.js","a29cdb02c56ac23b1379a19f493712e3"],["js/manifest.js","fbbc3a3e45e3425b0a96a7ce8bb401f6"],["js/vendor.js","c5554d0a35dc4c61f267e6ab43a2096f"],["statics/icons/apple-icon-152x152.png","da2b422e2895b9b9c1782a71b6be9d63"],["statics/icons/favicon-16x16.png","efb00e57304380d857603760600da5d5"],["statics/icons/favicon-32x32.png","2f9d7587924933c1912c342b190b53ca"],["statics/icons/icon-192x192.png","8c4120b4e88276badbc808e518572fad"],["statics/icons/icon-512x512.png","a13b2bd5261e2df374128df1aab93001"],["statics/icons/ms-icon-144x144.png","ed12d10fd0407eea42ccaf7af7991146"],["statics/manifest.json","4e6ea9272f296b3e214cf9e36b13932d"],["statics/quasar-logo.png","3020c8ac2c2872dec7741e5948520093"]],cacheName="sw-precache-v3-my-quasar-app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,n,t,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],a=new URL(n,self.location),r=createCacheKey(a,hashParamName,t,!1);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var a=new Request(t,{credentials:"same-origin"});return fetch(a).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,a),n=urlsToCacheKeys.has(t));0,n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});