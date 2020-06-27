import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToodsComponent } from './components/toods/toods.component';
import { AlbumsComponent } from './components/albums/albums.component';

import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    NavbarComponent,
    ToodsComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrettyCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
