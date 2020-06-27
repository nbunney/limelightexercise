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

  currentAlbum: album;
  currentPhotos: photo[];

  albumsSubscription: Subscription;
  photosSubscription: Subscription;

  showModal: boolean = false;

  constructor(private JSONPlaceholder: JSONPlaceholderService) { }

  ngOnInit(): void {
    this.createSubs();
  }

  sortAlbums(atoz: number) {
    const sortFunc = atoz ? this.sortAtoZ : this.sortZtoA
    this.albums.sort(sortFunc)
  }

  sortAtoZ(firstEl: album, secondEl: album): number {
    if (firstEl.title > secondEl.title) return 1;
    return -1;
  }

  sortZtoA(firstEl: album, secondEl: album): number {
    if (firstEl.title <= secondEl.title) return 1;
    return -1;
  }

  setAlbum(album: album) {
    this.showModal = false;
    this.currentAlbum = album;
    this.currentPhotos = this.findPhotos(album.id);
    this.showModal = true;
  }

  processAlbums(): void {
    if (!this.albums || !this.photos) return;
    this.albums = this.albums.map(album => {
      const photos = this.findPhotos(album.id);
      album.photoCount = photos.length;
      return album;
    })
  }

  createSubs(){
    this.albumsSubscription = this.JSONPlaceholder.getAlbums().subscribe(albums => {
      this.albums = albums;
      this.processAlbums();
    });
    this.photosSubscription = this.JSONPlaceholder.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.processAlbums();
    });
  }

  findPhotos(albumId) {
    return this.photos.filter(photo => {
      return photo.albumId === albumId;
    });
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

  ngOnDestroy(): void {
    this.albumsSubscription.unsubscribe();
    this.photosSubscription.unsubscribe();
  }

}
