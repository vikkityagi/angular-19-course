import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxAndBsujectHeaderTestingComponent } from './ngrx-and-bsuject-header-testing.component';

describe('NgrxAndBsujectHeaderTestingComponent', () => {
  let component: NgrxAndBsujectHeaderTestingComponent;
  let fixture: ComponentFixture<NgrxAndBsujectHeaderTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxAndBsujectHeaderTestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxAndBsujectHeaderTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
