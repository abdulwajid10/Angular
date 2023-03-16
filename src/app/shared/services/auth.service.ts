import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, signUp } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrlAuth = "localhost:3000/auth";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  signUp(user: signUp) {
    console.warn("inside signup service", user);
    this.http.post(`${this.baseUrlAuth}/signup`, user);
  }

  login(user: login) {
    console.warn("inside login service", user);
    this.http.post(`${this.baseUrlAuth}/login`, user).subscribe((res: any) => {
      // storing token in local storage
      localStorage.setItem('token', res.token);
      // navigating to signup route
      this.router.navigate(['/signup']);
    })
  }
}
