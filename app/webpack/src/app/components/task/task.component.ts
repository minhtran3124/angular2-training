import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TaskService } from '../../services/task.service';
import { HelperFormService } from '../../helpers/form.helper';
// import { Todo } from '../../models/todo.model';
import { Task } from '../../models/task.model';

@Component({
    selector: 'task',
    templateUrl: 'task.component.html'
    // styleUrls: ['task.component.css']
})
export class TaskComponent implements OnInit {
  id: string;
  tasks: Array<Task> = [];
  taskForm: FormGroup;

  constructor (
    private builder: FormBuilder,
    private taskService: TaskService,
    private helperFormService: HelperFormService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initForm();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    // this.getListTask();
  }

  initForm() {
    this.taskForm = this.builder.group({
			name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
		});
  }

  onSubmit(taskForm) {
    let taskFormValue = this.taskForm.value;
    let taskPrep = this.generateTaskIngredient(taskFormValue);

    this.createTask(taskPrep);
    this.helperFormService.resetForm(taskForm);
  }

  generateTaskIngredient(task) {
    task.status = false;
    task.created = new Date();
    task.id_todo = this.id;

    return task;
  }

  createTask(task: Task) {
    this.taskService
      .create(task)
      .then(task => {
        // this.tasks.push(task);
        console.log('add new task successfully!');
      });
  }

  getListTask() {
    console.log('22222222222222222');
    // this.tasks = this.taskService.getList(this.id);
    console.log(this.tasks);
  }

  resetForm() {
    this.helperFormService.resetForm(this.taskForm);
  }

  // getTodoDetail(id: string) {
  //   this.todoService
  //     .getTodo(id)
  //     .then(todo => {
  //       console.log('todo detail', todo);
  //     });
  // }
}
