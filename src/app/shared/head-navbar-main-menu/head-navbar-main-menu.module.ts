import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HeadNavbarMainMenuComponent} from "./head-navbar-main-menu.component";

@NgModule({
  imports: [RouterModule],
  declarations: [HeadNavbarMainMenuComponent],
  exports: [HeadNavbarMainMenuComponent]
})
export class HeadNavbarMainMenuModule {}
