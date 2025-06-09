'use strict';
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/video-notiziari',
      handler: 'video-notiziari.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
