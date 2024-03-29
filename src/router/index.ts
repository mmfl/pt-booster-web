import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

import { useAuthTokenStore } from '../stores/authToken';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authUserStore = useAuthTokenStore()
  const isAuthenticated = authUserStore.isAuthenticated;

  if (isAuthenticated) {
    await authUserStore.validateTokens();
  }

  const authRequired = to.matched.some((route) => route.meta.authRequired);

  if (authRequired) {
    if (isAuthenticated) {
      next();
    } else {
      next('/');
    }
  } else {
    next()
  }
});

export default router;
