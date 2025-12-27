import { Component, OnInit } from '@angular/core';
import { NgrxAndBehavioursubjectService } from '../ngrx-and-behavioursubject.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngrx-and-bsuject-header-testing',
  imports: [CommonModule],
  templateUrl: './ngrx-and-bsuject-header-testing.component.html',
  styleUrl: './ngrx-and-bsuject-header-testing.component.css'
})
export class NgrxAndBsujectHeaderTestingComponent implements OnInit {

  title = 'ngrx-and-bsubject-header-testing';

  constructor(public service: NgrxAndBehavioursubjectService) {
  }

  ngOnInit() {
    // this.service.user$.subscribe((user: any) => {
    //   this.title = user ? `Welcome, ${user.name}` : 'ngrx-and-bsubject-header-testing';
    // });
  }

  login() {
    // this.service.login({ id: '1', name: 'Vikki' });
    this.service.loginSignal({ id: '1', name: 'Vikki' });
  }

  logout() {
    // this.service.logout();
    this.service.logoutSignal();
  }



}
