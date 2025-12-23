import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAsyncValidatorsComponent } from './custom-async-validators.component';

describe('CustomAsyncValidatorsComponent', () => {
  let component: CustomAsyncValidatorsComponent;
  let fixture: ComponentFixture<CustomAsyncValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAsyncValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAsyncValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
