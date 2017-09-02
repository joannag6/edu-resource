import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DependentModules } from './app.dependent-modules'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DependentModules
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
