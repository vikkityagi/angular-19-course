import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxAndBsujectSidebarTestingComponent } from './ngrx-and-bsuject-sidebar-testing.component';

describe('NgrxAndBsujectSidebarTestingComponent', () => {
  let component: NgrxAndBsujectSidebarTestingComponent;
  let fixture: ComponentFixture<NgrxAndBsujectSidebarTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxAndBsujectSidebarTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxAndBsujectSidebarTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
