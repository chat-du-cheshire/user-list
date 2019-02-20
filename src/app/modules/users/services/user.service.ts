import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${environment.api}/users`;
  constructor(private http: HttpClient) { }

  getList(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url);
  }
}
