import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DependentModules } from './app.dependent-modules'
import { AppComponent } from './app.component';

import '@angular/material';

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
