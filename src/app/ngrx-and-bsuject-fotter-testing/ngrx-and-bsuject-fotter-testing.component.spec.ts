import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxAndBsujectFotterTestingComponent } from './ngrx-and-bsuject-fotter-testing.component';

describe('NgrxAndBsujectFotterTestingComponent', () => {
  let component: NgrxAndBsujectFotterTestingComponent;
  let fixture: ComponentFixture<NgrxAndBsujectFotterTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxAndBsujectFotterTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxAndBsujectFotterTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
