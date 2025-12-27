import { Component, OnInit } from '@angular/core';
import { NgrxAndBehavioursubjectService } from '../ngrx-and-behavioursubject.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngrx-and-bsuject-fotter-testing',
  imports: [CommonModule],
  templateUrl: './ngrx-and-bsuject-fotter-testing.component.html',
  styleUrl: './ngrx-and-bsuject-fotter-testing.component.css'
})
export class NgrxAndBsujectFotterTestingComponent implements OnInit {
  year = new Date().getFullYear();
  title = 'ngrx-and-bsubject-fotter-testing';


  constructor(public service: NgrxAndBehavioursubjectService) {  }

  ngOnInit() {

    this.service.user$.subscribe((user: any) => {
      this.title = user ? `Logged in as, ${user.name}` : 'ngrx-and-bsubject-fotter-testing';
    });
  }

  login() {
    this.service.login({ id: '1', name: 'test user' });
  }

}
