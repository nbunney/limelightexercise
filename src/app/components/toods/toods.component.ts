import {Component, OnDestroy, OnInit} from '@angular/core';
import { JSONPlaceholderService } from '../../services/jsonplaceholder.service'
import {Subscription} from "rxjs";
import {todo} from "../../models/todo.model";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import {user} from "../../models/user.model";

@Component({
  selector: 'app-toods',
  templateUrl: './toods.component.html',
  styleUrls: ['./toods.component.scss']
})
export class ToodsComponent implements OnInit, OnDestroy {

  public showComplete: boolean = true;
  todosSubscription: Subscription;
  routeSubscription: Subscription;
  todos: todo[] = [];
  userId: number = null;
  currentUser: user = null;

  constructor(private JSONPlaceholder: JSONPlaceholderService, private route: ActivatedRoute, private UserService: UserService) {}

  ngOnInit(): void {
    this.createSubs();
  }

  createSubs() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.userId = parseInt(params['id']);
      this.processTodos();
    })
    this.todosSubscription = this.JSONPlaceholder.getTodos().subscribe(todos => {
      this.todos = todos;
      this.processTodos();
    });

  }

  processTodos():void {
    this.currentUser = this.UserService.currentUser;
    if (!this.todos.length || ! this.userId) return;
    this.todos = this.todos.filter((todo: todo) => {
      return todo.userId === this.userId
    });
  }

  changeComplete() {
    this.showComplete = !this.showComplete;
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.todosSubscription.unsubscribe();
  }

}
