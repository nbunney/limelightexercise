import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userName: string = 'none'
  public isLoggedIn: boolean = false

  constructor(private userService: UserService, private router: Router) {
    this.userService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn
    })
    this.userService.currentUser$.subscribe(currentUser => {
      if (currentUser){
        this.userName = currentUser.name
      }
    })
  }

  logout(): void {
    console.log('logout')
    this.userService.logout()
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
