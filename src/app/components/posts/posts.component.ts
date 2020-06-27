import {Component, OnDestroy, OnInit} from '@angular/core';

import { JSONPlaceholderService } from '../../services/jsonplaceholder.service'
import {comment, post} from "../../models/post.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: post[];
  comments: comment[];
  showPosts: post[]
  searchTerm: string = '';
  postSubscription: Subscription;
  commentSubscription: Subscription;

  constructor(private JSONPlaceholder: JSONPlaceholderService) {

  }

  ngOnInit(): void {
    this.createSubs()
  }

  checkPost(post: post) {
    if (post.title.includes(this.searchTerm) || post.body.includes(this.searchTerm)) {
      return true;
    }
    return false;
  }

  createSubs(){
    this.postSubscription = this.JSONPlaceholder.getPosts().subscribe(posts => {
      this.posts = posts
      this.updatePosts()
    });
    this.commentSubscription = this.JSONPlaceholder.getComments().subscribe(comments => {
      this.comments = comments
      this.updatePosts()

    });
  }

  openPost(postId) {
    const thePost = this.posts.find(post => post.id === postId)
    thePost.showComments = !thePost.showComments
  }

  updatePosts() {
    if (!this.posts) return;
    this.showPosts = this.posts.map(post => {
      if (this.comments) {
        post.comments = this.comments.filter(comment => {
          return comment.postId === post.id
        })
      } else {
        post.comments = []
      }
      post.showComments = false;
      post.commentCount = post.comments.length;
      return post;
    })
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
    this.commentSubscription.unsubscribe();
  }

}
