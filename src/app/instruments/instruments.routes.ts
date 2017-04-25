import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {InstrumentsComponent} from "./instruments.component";

const routes: Routes = [
  { path: '', component: InstrumentsComponent}
];

export const InstrumentsRouting: ModuleWithProviders = RouterModule.forChild(routes);
