import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/IUser';
import {StorageService} from '../../app-common/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private entity = `user`;

  constructor(private storage: StorageService) {
  }

  getList(): Observable<IUser[]> {
    return this.storage.getAll(this.entity);
  }

  get(id) {
    return this.storage.get(this.entity, null, () => (item) => item.id === +id);
  }

  create(user: IUser) {
    return this.storage.set(this.entity, user);
  }

  update(user: IUser) {
    return this.storage.update(this.entity, user);
  }

  delete(user: IUser) {
    return this.storage.remove(this.entity, user);
  }
}
