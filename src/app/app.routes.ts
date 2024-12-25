import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [],
  },
];
