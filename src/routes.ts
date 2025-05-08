import { lazy } from 'react';
import type { RouteDefinition } from '@solidjs/router';

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: lazy(() => import('./app/page')),
  },
  {
    path: '/services',
    component: lazy(() => import('./app/services/page')),
  },
  {
    path: '/vision',
    component: lazy(() => import('./app/vision/page')),
  },
];

export default routes;