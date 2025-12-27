import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class NgrxAndBehavioursubjectService {

  private user = new BehaviorSubject<User | null>(null);
  public signaluser = signal<User | null>(null);

  user$ = this.user.asObservable();

  login(userData: User){
    this.user.next(userData);
  }

  loginSignal(userData: User){
    this.signaluser.set(userData);
  }

  logout(){
    this.user.next(null);
  }

  logoutSignal(){
    this.signaluser.set(null);
  }

  constructor() { }
}
