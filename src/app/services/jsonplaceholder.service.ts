import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import { user } from '../models/user.model'
import { post, comment } from "../models/post.model";
import { album, photo } from "../models/album.model";

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<user[]> {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<user[]>(url);
  }

  getPosts(): Observable<post[]> {
    const posturl = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get<post[]>(posturl);
  }

  getComments(): Observable<comment[]> {
    const commenturl = "https://jsonplaceholder.typicode.com/comments";
    return this.http.get<comment[]>(commenturl);
  }

  getAlbums(): Observable<album[]> {
    const albumurl = "https://jsonplaceholder.typicode.com/albums";
    return this.http.get<album[]>(albumurl);
  }

  getPhotos(): Observable<photo[]> {
    const photourl = "https://jsonplaceholder.typicode.com/photos";
    return this.http.get<photo[]>(photourl);
  }
}
