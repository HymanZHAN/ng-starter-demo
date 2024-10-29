import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./about/about.component'),
  },
  {
    path: '',
    component: HomeComponent,
  },
];
