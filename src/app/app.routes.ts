import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MdcBasedComponent } from './pages/mdc-based/mdc-based.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'mdc-based',
      },
      {
        path: 'mdc-based',
        component: MdcBasedComponent,
      },
    ],
  },
];
