import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Profile',
    loadComponent: async () => (await import('./announcement.page')).AnnouncementPage,
  },
];
