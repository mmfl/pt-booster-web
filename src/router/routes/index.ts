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
  {
    path: '/centres/:centreId',
    name: 'centre-detail',
    component: () => import('../../pages/CentreDetail.vue'),
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/centres/:centreId/trainers/:trainerId',
    name: 'trainer-detail',
    component: () => import('../../pages/CentreDetail.vue'),
    meta: {
      authRequired: true,
    }
  },
];

export default routes;
