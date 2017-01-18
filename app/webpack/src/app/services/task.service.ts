import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { database } from 'firebase';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// import { Todo } from '../models/todo.model';
import { Task } from '../models/task.model';
import { firebaseConfig } from '../firebase/firebase.config';
import { DataService } from '../services/firebase-database.service';

@Injectable()
export class TaskService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl: string;
  private root: string;

  constructor (
    private http: Http,
    private dataService: DataService ) {
    this.root = 'tasks';
    this.baseUrl = firebaseConfig.databaseURL + '/' + this.root;
  }

  // create new user
  create(task: Object): Promise<Task> {
    return this.http
      .post(this.baseUrl + '.json', JSON.stringify(task), {headers: this.headers})
      .toPromise()
      .then(response => {
        this.dataService.addKeyId(task, response.json());

        return task;
      })
      .catch(this.handleError);
  }

  getList(id: string) {
    console.log('333333333333333');
    let taskArr: Array<Task> = [];
    let taskObj = database().ref('tasks');

    taskObj
      .orderByChild('id_todo')
      .equalTo(id)
      .on('child_added', (snap) => {
        let data = snap.val();
        data.id = snap.key;
        taskArr.push(data);
      });

    // console.log(taskArr);
    return taskArr;
  }

  // getTodo(id: string): Promise<Task> {
  //   return this.http
  //     .get(this.baseUrl + id + '.json')
  //     .toPromise()
  //     .then(response => {
  //       return response.json();
  //     })
  //     .catch(this.handleError);
  // }

  // getList(): Promise<Todo[]>{
  //   return this.http
  //     .get(this.baseUrl + '.json')
  //     .toPromise()
  //     .then(response => {
  //       let todos: Array<Todo> = [];

  //       return this.dataService.convertKeyId(response.json(), todos);
  //     })
  //     .catch(this.handleError);
  // }

  // handle error when have errors
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
