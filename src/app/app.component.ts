import { Component } from '@angular/core';
import '@angular/material';

import { PasswordComponent } from './password.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  correctPassword =true;// false;
  actualPassword = "educ20069";
  password = '';

  onSubmit() {
    if (this.password == this.actualPassword) {
      this.correctPassword = true;
    } else {
      this.password = '';
      window.alert("Wrong Password");
    }
  }
}
