import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IUser} from '../interfaces/IUser';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserResolver implements Resolve<IUser> {
  constructor(private user: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    return this.user.get(route.params.id);
  }
}
