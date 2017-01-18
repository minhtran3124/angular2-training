import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user.model';
import { firebaseConfig } from '../firebase/firebase.config';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private baseUrl: string;
  private root: string;

  constructor(private http: Http) {
    this.root = 'users';
    this.baseUrl = firebaseConfig.databaseURL + '/' + this.root;
  }

  // create new user
  create(user: User): Promise<User> {
    return this.http
      .post(this.baseUrl + '.json', JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  // get(user: User): Promise<User> {
  //   return this.http
  //     .get(this.baseUrl + '/' +  + '.json')
  //     .toPromise()
  //     .then(response => {
  //       return response.json();
  //     })
  //     .catch(this.handleError);
  // }

  // handle error when have errors
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
