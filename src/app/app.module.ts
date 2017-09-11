import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DependentModules } from './app.dependent-modules'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password.component';

import '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    DependentModules,
    FormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
