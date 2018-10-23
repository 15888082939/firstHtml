const CACHE_NAME ='cache-v1';

const urlsToCache =[
'/',
'/css/index.css',
'/img/logo.png',
];

self.addEventListener('install',event =>{

caches.open(CACHE_NAME)

.then(cache =>{

returncache.addAll(urlsToCache);

});

});
