import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  isAdmin = true;
  constructor(private router: Router) { }

  reset(isAdmin) {
    this.isAdmin = isAdmin;
    if (!isAdmin) {
      this.router.navigate(['/']);
    }
  }
}
