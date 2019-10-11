import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this._authService.decode();

    if (user.role === next.data.role) {
      return true;
    }

    // navigate to not found page
    // this._router.navigate(['/404']);
    alert('invalid user' + user);
    return false;
  }
}
