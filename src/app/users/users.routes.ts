import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {UsersComponent} from "./users.component";

const routes: Routes = [
  { path: '', component: UsersComponent}
];

export const UsersRouting: ModuleWithProviders = RouterModule.forChild(routes);
