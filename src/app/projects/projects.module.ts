import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from "./projects.component";
import {ProjectsRouting} from "./projects.routes";
import {LeftSidebarModule} from "../shared/left-sidebar/left-sidebar.module";
import {HeadNavbarMainMenuModule} from "../shared/head-navbar-main-menu/head-navbar-main-menu.module";

@NgModule({
  imports: [
    CommonModule,
    ProjectsRouting,
    HeadNavbarMainMenuModule,
    LeftSidebarModule
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
