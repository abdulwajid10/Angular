import { Component } from '@angular/core';
import { login } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private auth: AuthService
  ) { }
  login(data: login) {
    console.log("login component", data);
    this.auth.login(data);
  }
}
