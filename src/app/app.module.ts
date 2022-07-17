import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesModule } from './homepages/homepages.module';
import { FootbarComponent } from './shared/footbar/footbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FootbarComponent
  ],
  imports: [
    BrowserModule,
    HomepagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
