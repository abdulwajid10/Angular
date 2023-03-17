import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login } from 'src/app/shared/models/auth.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  
  login(data: login) {
    this.auth.login(data).subscribe((res: any) => {
      if (res) {
        console.log("inside login component response true", res)
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);

      } else {
        console.log("inside login component response failed");
        this.router.navigate(['/login']);
      }
    })
  }
}
