import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { WritableSignal } from '@angular/core';
import { BehaviourSubjectAndSignalService } from '../behaviour-subject-and-signal.service';

@Component({
  selector: 'app-beahviour-subject-and-signal',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './beahviour-subject-and-signal.component.html',
  styleUrl: './beahviour-subject-and-signal.component.css'
})
export class BeahviourSubjectAndSignalComponent {

  myForm1!: FormGroup;
  myForm2!: FormGroup;
  formArray: any[] = [];
  formArraySignal!: WritableSignal<any[]>;

  constructor(private service: BehaviourSubjectAndSignalService) { }

  ngOnInit() {
    const group: any = {};
    const group2: any = {};

    this.buildForm().forEach(element => {
      group[element.control] = new FormControl('');
    });

    this.buildFormSignal().forEach(element=>
      {group2[element.control]=new FormControl('');
    });
    this.myForm1 = new FormGroup(group);

    this.myForm2 = new FormGroup(group2);
    
    this.service.getStudent().subscribe(data => {
      this.formArray = data;
    });

    this.formArraySignal = this.service.getStudentSignal();
  }

  buildForm() {
    return [{control: 'name',label:'Name'},{control: 'age',label:'Age'}];
  }

  trackByName(index: number, item: any) {
    return item.control;
  }

  trackByName1(index: number, item: any) {
    return item.control;
  }

  onSubmit() {
    this.service.addStudent(this.myForm1.value);
    this.myForm1.reset();
  }

  buildFormSignal() {
    return [{control: 'name',label:'Name2'},{control: 'age',label:'Age2'}];
  }

  onSubmitSignal() {
    this.service.addStudentSignal(this.myForm2.value);
    this.myForm2.reset();
  }

}
