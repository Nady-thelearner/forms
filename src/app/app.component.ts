import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    /* setValue to set entire form
    this.signupForm.setValue({
      userData: {
        username: 'Nadeem',
        email: 'sknadeem9090@gmail.com',
      },
      secret: 'pet',
      questionAnswer: 'test',
      gender: 'Male',
    });
    Old approach*/
    //patch value to set parts of the form.
    this.signupForm.form.patchValue({
      userData :{
        username : suggestedName
      }
    });
  }

  /* onSubmit(form : NgForm){
    console.log(form);

  } */
  onSubmit() {
    console.log(this.signupForm);
  }
}
