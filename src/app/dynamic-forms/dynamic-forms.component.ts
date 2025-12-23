import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-forms.component.html',
  styleUrl: './dynamic-forms.component.css'
})
export class DynamicFormsComponent implements OnInit {

  myForm!: FormGroup;

  ngOnInit() {
    // Initialize form here

    const group: any = {};

    this.formControls().forEach(control => {
      group[control.controlname] = new FormControl('', control.required ? Validators.required : []);
    });

    this.myForm = new FormGroup(group);

  }

  public formControls() {
    return [{ controlname: 'firstName', label: 'First Name', type: 'text', required: true },
    { controlname: 'age', label: 'Age', type: 'number', required: false },
    { controlname: 'email', label: 'Email', type: 'email', required: true }
    ]
  }

  public trackByName(index: number, field: any) {
    return field.controlname;
  }

  public onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!');
      console.log(this.myForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }


}
