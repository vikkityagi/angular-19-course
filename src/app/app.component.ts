import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { CustomAsyncValidatorsComponent } from './custom-async-validators/custom-async-validators.component';
import { BeahviourSubjectAndSignalComponent } from './beahviour-subject-and-signal/beahviour-subject-and-signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent,FormArrayComponent,DynamicFormsComponent,CustomAsyncValidatorsComponent,BeahviourSubjectAndSignalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-course-ui';
}
