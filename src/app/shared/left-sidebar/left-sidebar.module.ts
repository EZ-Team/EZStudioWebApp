import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LeftSidebarComponent} from "./left-sidebar.component";

@NgModule({
  imports: [RouterModule],
  declarations: [LeftSidebarComponent],
  exports: [LeftSidebarComponent]
})
export class LeftSidebarModule {}
