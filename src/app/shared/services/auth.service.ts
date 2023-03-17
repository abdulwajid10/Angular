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

  // signup post request
  signUp(user: signUp) {
    console.warn("inside signup service", user);
    return this.http.post(`${this.baseUrlAuth}/signup`, user);
  }

  // login post request
  login(user: login) {
    console.warn("inside login service", user);
    return this.http.post(`${this.baseUrlAuth}/login`, user);
  }

  // checking if user is logged in or not
  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  // get token
  getToken() {
    return localStorage.getItem('token') || '';
  }

  // logout user
  logut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
