import { Injectable } from '@angular/core';
import {userData} from './mock-user-data'
import { User } from './user'
import {Observable,of} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  getUserData() : Observable<User[]> {
    return of(userData);
  }

  constructor() { }
}
