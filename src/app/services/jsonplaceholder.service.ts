import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { user } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<user[]> {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<user[]>(url);
  }
}
