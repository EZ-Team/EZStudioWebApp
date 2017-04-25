import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routes';
import {HeadNavbarMainMenuModule} from "../shared/head-navbar-main-menu/head-navbar-main-menu.module";
import {LeftSidebarModule} from "../shared/left-sidebar/left-sidebar.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    HeadNavbarMainMenuModule,
    LeftSidebarModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
