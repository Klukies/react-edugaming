if ('function' === typeof importScripts) {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
  );
  /*global workbox*/
  if (workbox) {
    // adjust log level for displaying workbox logs
    workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    workbox.routing.registerNavigationRoute('/index.html');

    workbox.routing.registerRoute(
      /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
      new workbox.strategies.NetworkFirst({
        cacheName: 'images',
        plugins: [
          new workbox.expiration.Plugin({
            maxEntries: 60,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
          }),
        ],
      })
    );

    workbox.routing.registerRoute(
      new RegExp('^https://laravel.lukas-cornille.be/images'),
      new workbox.strategies.NetworkFirst({
        cacheName: 'image-cache',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          })
        ]
      })
    );

    workbox.routing.registerRoute(
      new RegExp('^https://node-edugaming.herokuapp.com/images/'),
      new workbox.strategies.NetworkFirst({
        cacheName: 'coach-image-cache',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          })
        ]
      })
    )

    workbox.routing.registerRoute(
      new RegExp('^https://laravel.lukas-cornille.be/api/home'),
      new workbox.strategies.NetworkFirst({
        cacheName: 'home-cache',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          })
        ]
      })
    );

    workbox.routing.registerRoute(
      new RegExp('^https://laravel.lukas-cornille.be/api/filters'),
      new workbox.strategies.NetworkFirst({
        cacheName: 'filters-cache',
        plugins: [
          new workbox.cacheableResponse.Plugin({
            statuses: [0, 200],
          })
        ]
      })
    );

  } else {
    console.log('Workbox could not be loaded. No Offline support');
  }
}
