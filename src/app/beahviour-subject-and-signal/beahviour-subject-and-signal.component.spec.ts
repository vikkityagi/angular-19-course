import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeahviourSubjectAndSignalComponent } from './beahviour-subject-and-signal.component';

describe('BeahviourSubjectAndSignalComponent', () => {
  let component: BeahviourSubjectAndSignalComponent;
  let fixture: ComponentFixture<BeahviourSubjectAndSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeahviourSubjectAndSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeahviourSubjectAndSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
