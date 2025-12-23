import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of, delay } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-custom-async-validators',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-async-validators.component.html',
  styleUrl: './custom-async-validators.component.css'
})
export class CustomAsyncValidatorsComponent implements OnInit {

  myForm!: FormGroup;

  submittedformvalues: any[] = [];

  ngOnInit() {
    const group: any = {};
    // Initialize form here
    this.buildForm().forEach(field => {
      if(field.control=='email') {
        group[field.control] = new FormControl('', field.required ? Validators.required : [], this.emailExistsValidator());
      }else{
        group[field.control] = new FormControl('', field.required ? Validators.required : []);
      }

    });

    this.myForm = new FormGroup(group);
  }

  buildForm() {
    // Build form here
    return [{ control: 'name', label: 'Name', required: true, type: 'text' },
    { control: 'email', label: 'Email', required: true, type: 'email' },
    { control: 'age', label: 'Age', required: false, type: 'number' }];
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!');
      console.log(this.myForm.value);
      this.submittedformvalues.push(this.myForm.value);
      console.log(this.submittedformvalues);
      this.myForm.reset();
    } else {
      console.log('Form is invalid!');
    }
  }

  trackByName(index: number, field: any) {
    return field.control;
  }

  emailExistsValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {

      // empty value → no error
      if (!control.value) {
        return of(null);
      }

      return of(this.submittedformvalues).pipe(
        delay(500), // simulate API delay
        map(values => {
          const exists = values.some(
            item => item.email === control.value
          );

          return exists ? { emailExists: true } : null;
        })
      );
    };
  }


}
