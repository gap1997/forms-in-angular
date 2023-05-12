import { Component } from '@angular/core';

// import classes which are required for reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Add characterictics which are required in form
  nForm: FormGroup;

  post: any;

  description: String = '';
  fristname: string = '';
  lastname: string = '';
  phone: string = '';
  email: string = '';
  city: string = '';
  state: string = '';
  zipcode: string = '';
  comment: string = '';

  // Use dependency injection for FormBuilder
  constructor(private fb: FormBuilder) {
    this.nForm = fb.group({
      fristname: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]+@[a-zA-Z]{1,}.[a-zA-Z]{2,}$'),
        ]),
      ],

      city: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],

      state: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.pattern('[a-zA-Z ]*'),
        ]),
      ],
      // zipcode: [
      //   Validators.compose([
      //     Validators.required,
      //     Validators.minLength(5),
      //     Validators.maxLength(6),
      //     Validators.pattern('^[5-6]'),
      //   ]),
      // ],

      comment: [
        '',
        [Validators.minLength(5), Validators.pattern('^[a-zA-Z ]*$')],
      ],
      description: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20),
        ]),
      ],
      validate: '',
    });
  }

  // Copy the data from html to our class characteristics
  addPost(post: any) {
    this.description = post.description;
    this.fristname = post.fristname;
    this.lastname = post.lastname;
    this.phone = post.phone;
    this.email = post.email;
    this.city = post.city;
    this.state = post.state;
    //this.zipcode = post.zipcode;
    this.comment = post.comment;
  }
}
