import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
    // styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    private router: Router,
    private alertService: AlertService,
    private userService: UserService,
    private builder: FormBuilder
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  register(user): void {
    this.userService
      .create(user)
      .then(firebaseKey => {
        console.log('key', firebaseKey);
      });
  }

  // reset form
  resetForm(): void {
    this.userForm = this.builder.group({
			name: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
		});
  }

  onSubmit(userForm): void {
    this.register(this.userForm.value);
    this.resetForm();
  }
}
