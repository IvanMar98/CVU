import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepagesRoutingModule } from './homepages-routing.module';
import { HomepagesComponent } from './homepages.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { InfohomeComponent } from './components/infohome/infohome.component';


@NgModule({
  declarations: [
    HomepagesComponent,
    NavbarhomeComponent,
    InfohomeComponent
  ],
  imports: [
    CommonModule,
    HomepagesRoutingModule
  ]
})
export class HomepagesModule { }
