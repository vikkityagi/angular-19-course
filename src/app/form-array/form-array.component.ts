import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-array-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css'
})
export class FormArrayComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      items: this.fb.array([])
    });

    this.addItem();
  }

  get items() {
    return this.myForm.get('items') as FormArray;
  }

  addItem() {
    const myFormArrayItem = this.fb.group({
      name: [''],
      quantity: ['']
    })

    this.items.push(myFormArrayItem);
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }
}