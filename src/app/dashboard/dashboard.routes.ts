import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: DashboardComponent,
    children: [
      { path: '', loadChildren: 'app/dashboard/apps/apps.module#AppsModule' }
    ]
  }
];

export const DashboardRouting: ModuleWithProviders = RouterModule.forChild(routes);
