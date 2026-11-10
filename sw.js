// English for Iraq – يعمل دون إنترنت بعد أول فتح
const CACHE="english5-v2";
const PRE=["./","index.html","styles.css","app.js","data.js","manifest.json","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","icons/favicon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const url=new URL(r.url);
  if(url.hostname.includes("abacus"))return;
  if(r.mode==="navigate"||url.pathname.endsWith(".js")||url.pathname.endsWith(".css")){
    e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(h=>h||caches.match("./"))));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{
    if(url.origin===location.origin||url.hostname.endsWith("gstatic.com")||url.hostname.endsWith("googleapis.com")){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}
    return res})));
});
