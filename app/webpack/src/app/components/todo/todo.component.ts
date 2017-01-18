import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { initializeApp, database } from 'firebase';
// import { firebaseConfig } from '../../firebase/firebase.config';

import { TodoService } from '../../services/todo.service';
import { HelperFormService } from '../../helpers/form.helper';
import { Todo } from '../../models/todo.model';

@Component({
    selector: 'todo',
    templateUrl: 'todo.component.html'
    // styleUrls: ['todo.component.css']
})
export class TodoComponent implements OnInit  {

  todos: Array<Todo>;
  todoForm: FormGroup;

  constructor (
    private builder: FormBuilder,
    private todoService: TodoService,
    private helperFormService: HelperFormService
  ) {
    // initializeApp(firebaseConfig);

    // var root = database().ref('todos/');


    // root.on('value', (snap) => {
    //   let data = snap.val();
    //   console.log('data', data);
    //   let dataWithKeys = Object.keys(data).map((key) => {
    //      console.log(data[key]);
    //      var obj = data[key];
    //      obj._key = key;
    //      return obj;
    //   });
    //   console.log(dataWithKeys); // This is a synchronized array
    // });

    // task
    //   .orderByChild('id_todo')
    //   .equalTo('-KaeML0e1tWOi8bymTHo')
    //   .on('child_added', (snap) => {
    //     let data = snap.val();
    //     console.log('data dc rồi ahihi', data);
    //   });
  }

  onSubmit(todoForm) {
    this.createTodo(this.todoForm.value);
    this.helperFormService.resetForm(this.todoForm);
  }

  ngOnInit() {
    this.getTodo();
    this.initForm();
  }

  initForm(): void {
    this.todoForm = this.builder.group({
			name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
		});
  }

  createTodo(todo): void {
    this.todoService
      .create(todo)
      .then(todo => {
        this.todos.push(todo);
        console.log('add new todo successfully!');
      });
  }

  getTodo(): void {
    this.todoService
      .getList()
      .then(todos => {
        this.todos = todos;
      });
  }

  getTodoDetail(id: string) {
    this.todoService
      .getTodo(id)
      .then(todo => {
        console.log('todo detail', todo);
      });
  }

  resetForm(): void {
    this.helperFormService.resetForm(this.todoForm);
  }
}
