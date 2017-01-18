import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class HelperFormService {

  constructor() { }

  resetForm(form) {
    form.reset();
  }
}
