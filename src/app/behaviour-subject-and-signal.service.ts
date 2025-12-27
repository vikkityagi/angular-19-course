import { Injectable, signal } from '@angular/core';
import { sign } from 'node:crypto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourSubjectAndSignalService {

  private bsubject$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private bsignal = signal<any[]>([]);
  

  addStudent(student: any){
    this.bsubject$.next([...this.bsubject$.value,student]);
  }

  addStudentSignal(student: any){
    this.bsignal.set([...this.bsignal(),student]);
  }

  getStudent(){
    return this.bsubject$.asObservable();
  }

  getStudentSignal(){
    return this.bsignal;
  }



  constructor() { }
}
