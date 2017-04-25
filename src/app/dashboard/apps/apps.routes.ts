import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: AppsComponent}
];

export const AppsRouting: ModuleWithProviders = RouterModule.forChild(routes);
