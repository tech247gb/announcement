import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'List',
    loadComponent: async () => (await import('./star.page')).StarPage,
  },
];
