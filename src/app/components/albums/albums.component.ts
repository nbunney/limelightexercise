import {Component, OnDestroy, OnInit} from '@angular/core';
import { JSONPlaceholderService } from '../../services/jsonplaceholder.service'

import { album, photo } from "../../models/album.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {

  albums: album[];
  photos: photo[];

  albumsSubscription: Subscription;
  photosSubscription: Subscription;

  constructor(private JSONPlaceholder: JSONPlaceholderService) { }

  ngOnInit(): void {
    this.createSubs();
  }

  createSubs(){
    this.albumsSubscription = this.JSONPlaceholder.getAlbums().subscribe(albums => {
      this.albums = albums
    });
    this.photosSubscription = this.JSONPlaceholder.getPhotos().subscribe(photos => {
      this.photos = photos
    });
  }

  findPhotos(albumId) {
    return this.photos.filter(photo => {
      return photo.albumId === albumId;
    });
  }

  ngOnDestroy(): void {
    this.albumsSubscription.unsubscribe();
    this.photosSubscription.unsubscribe();
  }

}
