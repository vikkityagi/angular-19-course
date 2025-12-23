import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SubjectOrBehaviourSubjectService } from '../subject-or-behavioursubject.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  constructor(private subjectOrBehaviourSubjectService: SubjectOrBehaviourSubjectService) { }

  name: string = '';
  age: number = 0;

  ngOnInit() {

    this.subjectOrBehaviourSubjectService.getStudentsBSubject().subscribe(students => {
      console.log('BehaviorSubject Students List:', students);
    });

    this.subjectOrBehaviourSubjectService.getStudentsSubject().subscribe(students => {
      console.log('Subject Students List:', students);
    });
  }

  onSubmit() {
    this.addStudentToSubject();
    this.addStudentToBehaviourSubject();
    // console.log('Student Added:', { name: this.name, age: this.age });
  }

  addStudentToSubject() {
    // Using Subject
    this.subjectOrBehaviourSubjectService.addStudentToSubject({ name: this.name, age: this.age });
  }

  addStudentToBehaviourSubject() {
    // Using BehaviorSubject
    this.subjectOrBehaviourSubjectService.addStudentToBehaviorSubject({ name: this.name, age: this.age });
  }
}