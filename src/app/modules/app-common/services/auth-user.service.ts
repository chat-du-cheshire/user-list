import { Injectable } from '@angular/core';
import {StateService} from '@uirouter/core';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  isAdmin = true;
  constructor(private router: StateService) { }

  reset(isAdmin) {
    this.isAdmin = isAdmin;
    if (!isAdmin) {
      this.router.go('root');
    }
  }
}
