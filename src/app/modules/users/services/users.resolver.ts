import {Resolve} from '@angular/router';
import {IUser} from '../interfaces/IUser';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUser[]> {
  constructor(private users: UserService) {}
  resolve(): Observable<IUser[]> {
    return this.users.getList();
  }
}
