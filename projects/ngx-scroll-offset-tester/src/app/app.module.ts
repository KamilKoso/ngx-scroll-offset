import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxScrollOffsetModule } from 'ngx-scroll-offset'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxScrollOffsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
