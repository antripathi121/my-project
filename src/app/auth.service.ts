import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private message: string;
  baseUrl:'127.0.0.1:8000/api/';

  constructor(private _router: Router, private http: HttpClient) { }

  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   * //@return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  // return true;
  }

  // simulate jwt token is valid
  // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  isTokenExpired(): boolean {
    return false;
  }

  loginAdmin(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.http.post(`http://192.168.0.102:5000/api/users/login/`, data, { headers, observe: 'response' })

  }

  login(): void {
    // localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.GA0Y9gYIjmx1jLwuRHuBgZ8m6o-NgkD84nO0ym68CWo`);

    this._router.navigate(['/dashboard']);
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout(): void {
    this.clear();
    this._router.navigate(['/adminlogin']);
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }

  SignUp(data: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/`, data);
    // return this.http.post(`${this.baseUrl}`, data)
        // .map(res => res)
        // .catch(this.handleError);

}
}
