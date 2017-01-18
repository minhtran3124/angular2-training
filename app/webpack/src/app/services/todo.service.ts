import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Todo } from '../models/todo.model';
import { Task } from '../models/task.model';
import { firebaseConfig } from '../firebase/firebase.config';
import { DataService } from '../services/firebase-database.service';

@Injectable()
export class TodoService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl: string;
  private root: string;

  constructor (
    private http: Http,
    private dataService: DataService ) {
    this.root = 'todos';
    this.baseUrl = firebaseConfig.databaseURL + '/' + this.root;
  }

  // create new user
  create(todo: Todo): Promise<Todo> {
    return this.http
      .post(this.baseUrl + '.json', JSON.stringify(todo), {headers: this.headers})
      .toPromise()
      .then(response => {
        this.dataService.addKeyId(todo, response.json());

        return todo;
      })
      .catch(this.handleError);
  }

  getTodo(id: string): Promise<Task> {
    return this.http
      .get(this.baseUrl + id + '.json')
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getList(): Promise<Todo[]>{
    return this.http
      .get(this.baseUrl + '.json')
      .toPromise()
      .then(response => {
        let todos: Array<Todo> = [];

        return this.dataService.convertKeyId(response.json(), todos);
      })
      .catch(this.handleError);
  }

  // handle error when have errors
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
