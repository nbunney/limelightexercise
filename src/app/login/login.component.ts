import { Component, OnInit } from '@angular/core';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service'
import { user } from '../models/user.model'
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private Users: user[];
  readonly email: FormControl;

  regForm = new FormGroup({
    email: new FormControl()
  });

  constructor(private JSONPlaceholder: JSONPlaceholderService,
              private UserService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  attemptLogin(){
    let formValue = this.regForm.getRawValue();
    if(formValue.email) {
      let user = this.Users.find( element => element.email === formValue.email.valueOf());
      console.log(user);
      if (user) {
        this.UserService.login(user);
        this.router.navigate(['dashboard']);
      }
    }
  }

  getUsers(){
    this.JSONPlaceholder.getUsers().subscribe(users => this.Users = users);
  }
}
