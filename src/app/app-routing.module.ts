import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import {PostsComponent} from "./components/posts/posts.component";

import { LoggedInGuard } from "./guards/logged-in.guard";
import {AlbumsComponent} from "./components/albums/albums.component";
import {ToodsComponent} from "./components/toods/toods.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'posts/:id',
    component: PostsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'albums/:id',
    component: AlbumsComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'todos/:id',
    component: ToodsComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
