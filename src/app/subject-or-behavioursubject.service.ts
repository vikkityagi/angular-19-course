import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectOrBehaviourSubjectService {

  private studentsSubject = { name: 'Raj1', age: 20 };
  private studentsBSubject: any[] = [];

  studentsSubject$ = new Subject<any>();
  studentsBSubject$ = new BehaviorSubject(this.studentsBSubject);

  getStudentsSubject() {
    return this.studentsSubject$.asObservable();
  }

  getStudentsBSubject() {
    return this.studentsBSubject$.asObservable();
  }

  addStudentToSubject(student: any) {
    // this.studentsSubject.push(student);
    this.studentsSubject$.next(student);
  }

  addStudentToBehaviorSubject(student: any) {
    this.studentsBSubject.push(student);
    this.studentsBSubject$.next(this.studentsBSubject);
  }

  constructor() { }
}
