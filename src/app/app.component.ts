import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  @ViewChild('f') signupForm: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
    //setValue to set entire form
    this.signupForm.setValue({
      userData: {
        username: 'Nadeem',
        email: 'sknadeem9090@gmail.com',
      },
      secret: 'pet',
      questionAnswer: 'test',
      gender: 'Male',
    });
    // Old approach
   // patch value to set parts of the form.
   /* this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });*/
  }

  /* onSubmit(form : NgForm){
    console.log(form);

  } */
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    // console.log(this.user);

    this.signupForm.reset();

    console.log(this.signupForm);
  }
}
