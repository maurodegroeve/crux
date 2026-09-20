/* Crux service worker: caches the app so it opens offline. Bump CACHE when you upload a new version. */
var CACHE='crux-v2';
var ASSETS=['./','index.html','manifest.webmanifest','fonts/bricolage-grotesque-latin-wght-normal.woff2','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
/* Show the cached copy straight away, refresh it in the background for next time. */
self.addEventListener('fetch',function(e){
  var r=e.request;
  if(r.method!=='GET'||new URL(r.url).origin!==self.location.origin) return;
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(function(hit){
    var net=fetch(r).then(function(res){
      if(res&&res.ok){ var copy=res.clone(); caches.open(CACHE).then(function(c){c.put(r,copy);}); }
      return res;
    }).catch(function(){ return hit||(r.mode==='navigate'?caches.match('index.html'):undefined); });
    return hit||net;
  }));
});
