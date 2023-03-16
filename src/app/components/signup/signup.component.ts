import { Component } from '@angular/core';
import { signUp } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(
    private user: AuthService
  ){}

  signUp(data: signUp){
    this.user.signUp(data);
  }
}
