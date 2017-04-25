import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsRouting } from './apps.routes';
import { AppsComponent } from './apps.component';
import {Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    AppsRouting,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [AppsComponent]
})
export class AppsModule { }
