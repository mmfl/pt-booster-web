const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../../pages/Index.vue'),
    meta: {
      authRequired: false,
    }
  },
  {
    path: '/oauth/kakao',
    name: 'authorize',
    component: () => import('../../pages/Authorize.vue'),
    meta: {
      authRequired: false,
    }
  },
  {
    path: '/centres',
    name: 'centre-list',
    component: () => import('../../pages/CentreList.vue'),
    meta: {
      authRequired: true,
    }
  },
];

export default routes;
