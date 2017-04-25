import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InstrumentsComponent} from "./instruments.component";
import {LeftSidebarModule} from "../shared/left-sidebar/left-sidebar.module";
import {HeadNavbarMainMenuModule} from "../shared/head-navbar-main-menu/head-navbar-main-menu.module";
import {InstrumentsRouting} from "./instruments.routes";

@NgModule({
  imports: [
    CommonModule,
    InstrumentsRouting,
    HeadNavbarMainMenuModule,
    LeftSidebarModule
  ],
  declarations: [InstrumentsComponent]
})
export class InstrumentsModule { }
