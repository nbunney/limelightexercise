import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import { user } from "../../models/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public user: user|null = null
  public isLoggedIn: boolean = false

  userSubscription: Subscription;
  loggedInSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) {
    this.loggedInSubscription = this.userService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    })
    this.userSubscription = this.userService.currentUser$.subscribe(currentUser => {
      if (currentUser){
        this.user = currentUser
      }
    })
  }

  logout(): void {
    this.userService.logout()
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe()
    this.userSubscription.unsubscribe();
  }
}
