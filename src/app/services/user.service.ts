import { Injectable } from '@angular/core';
import {user} from "../models/user.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {
  public isLoggedIn$ = new BehaviorSubject(false)
  public currentUser$ = new BehaviorSubject(null)

  public currentUser: user|null = null;

  constructor() { }

  public login(myUser: user) {
    this.currentUser = myUser;
    this.currentUser$.next(this.currentUser)
    this.isLoggedIn$.next(true)
  }

  public logout() {
    this.currentUser = null;
    this.currentUser$.next(null)
    this.isLoggedIn$.next(false)
  }
}
