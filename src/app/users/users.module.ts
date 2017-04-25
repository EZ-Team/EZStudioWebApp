import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeftSidebarModule} from "../shared/left-sidebar/left-sidebar.module";
import {HeadNavbarMainMenuModule} from "../shared/head-navbar-main-menu/head-navbar-main-menu.module";
import {UsersComponent} from "./users.component";
import {UsersRouting} from "./users.routes";

@NgModule({
  imports: [
    CommonModule,
    UsersRouting,
    HeadNavbarMainMenuModule,
    LeftSidebarModule
  ],
  declarations: [UsersComponent]
})
export class UsersModule { }
