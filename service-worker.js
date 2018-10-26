const CACHE_NAME ='cache-v1';

const urlsToCache =[
'/',
'/css/index.css',
'/img/logo.png',
  '/index.html',
];

self.addEventListener('install',event =>{

caches.open(CACHE_NAME)

.then(cache =>{

return cache.addAll(urlsToCache);

});

});
