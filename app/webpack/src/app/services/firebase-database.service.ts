import { Injectable } from '@angular/core';

import { Todo } from '../models/todo.model';

@Injectable()
export class DataService {

  constructor() { }

  convertKeyId(obj: Object, listObj: Array<Object>): Array<Object> {
    for (var key in obj) {
      obj[key].id = key;
      listObj.push(obj[key]);
    }

    return listObj;
  }

  addKeyId(objTodo, objRes): Object {
    return objTodo.id = objRes.name;
  }
}
