const CACHE_NAME ='cache-v1';

const urlsToCache =[
'/',
'/css/index.css',
'/img/logo.png',
  'https://cxx-html.herokuapp.com',
];

self.addEventListener('install',event =>{

caches.open(CACHE_NAME)

.then(cache =>{

return cache.addAll(urlsToCache);

});

});
