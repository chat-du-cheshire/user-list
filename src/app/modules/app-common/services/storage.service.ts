import {Injectable} from '@angular/core';
import {of} from 'rxjs/internal/observable/of';
import {Observable} from 'rxjs';

type comparator = (item: any) => (entityItem: any) => boolean;
const defaultCompareFn: comparator = (item) => (entityItem) => item.id === entityItem.id;

const replace = (array: any[], item: any, searchFn: comparator): any[] => {
  const i = array.findIndex(searchFn(item));

  if (i > -1) {
    return [...array.slice(0, i), item, ...array.slice(i + 1, array.length)];
  }

  return array;
};

const remove = (array: any[], item: any, searchFn: comparator): any[] => {
  const i = array.findIndex(searchFn(item));

  if (i > -1) {
    array.splice(i, 1);
  }

  return array;
};

interface IStorage {
  [key: string]: any[];
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: IStorage = JSON.parse(localStorage.getItem('storage')) || {};

  getEntity(entity: string): Observable<any> {
    return of(this.storage[entity] || null);
  }

  get(entity: string, item: any, compareFn?: comparator): Observable<any> {
    if (!this.storage[entity]) {
      return of(null);
    }

    const compare = compareFn ? compareFn(item) : defaultCompareFn(item);

    return of(this.storage[entity].find(compare));
  }

  set(entity: string, item: any): Observable<any> {
    if (this.storage[entity]) {
      this.storage[entity].push(item);
    } else {
      this.storage[entity] = [item];
    }

    localStorage.setItem('storage', JSON.stringify(this.storage));

    return of(item);
  }

  update(entity: string, item: any, compareFn?: comparator): Observable<any> {
    if (!this.storage[entity]) {
      return of(null);
    }

    this.storage[entity] = replace(this.storage[entity], item, compareFn || defaultCompareFn);

    localStorage.setItem('storage', JSON.stringify(this.storage));

    return of(item);
  }

  remove(entity: string, item: any, compareFn?: comparator): Observable<any> {
    if (!this.storage[entity]) {
      return of(null);
    }

    const afterRemove = remove(this.storage[item], item, compareFn || defaultCompareFn);

    if (!afterRemove.length) {
      delete this.storage[entity];
    }

    if (Object.keys(this.storage).length) {
      localStorage.setItem('storage', JSON.stringify(this.storage));
    } else {
      localStorage.removeItem('storage');
    }

    return of(item);
  }
}
