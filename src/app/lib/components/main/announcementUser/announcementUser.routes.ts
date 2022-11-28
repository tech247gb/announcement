import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'AnnouncementUser',
    loadComponent: async () => (await import('./announcementUser.page')).AnnouncementUserPage,
  },
];
