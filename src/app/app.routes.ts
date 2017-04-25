import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule'},
  { path: 'projects', loadChildren: 'app/projects/projects.module#ProjectsModule'},
  { path: 'instruments', loadChildren: 'app/instruments/instruments.module#InstrumentsModule'},
  { path: 'users', loadChildren: 'app/users/users.module#UsersModule'}
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
