import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './form/form.component';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  public data: IUser[] = [];
  public dataChanged = new BehaviorSubject(true);

  get getChanges() {
    return this.dataChanged.asObservable();
  }
  constructor() {
    this.getUsers();
  }

  public create(user: IUser) {
    this.data.push(user);
    this.makeIds();
    localStorage.setItem('result', JSON.stringify(this.data));
    this.dataChanged.next(true);
  }

  public getUsers() {
    localStorage.getItem('result');
    if (localStorage.getItem('result')) {
      //@ts-ignore
      this.data = JSON.parse(localStorage.getItem('result'));
    }
  }
  public delete(id: number) {
    this.data = this.data.filter((x) => x.id !== id);
    this.makeIds();
    localStorage.setItem('result', JSON.stringify(this.data));
    this.dataChanged.next(true);
  }

  makeIds() {
    this.data = this.data.map((user, index) => {
      user.id = index;
      return user;
    });
  }

  public edit(result: any) {
    this.data[result.id] = result;
    localStorage.setItem('result', JSON.stringify(this.data));
    this.dataChanged.next(true);
  }
}
